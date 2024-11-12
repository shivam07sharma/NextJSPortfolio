import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req) {
    try{
        let msg=req.body;
        mongoose.connect(process.env.MONGODB_URI+"Portfolio");
        const schema=mongoose.Schema({
            Comment:String,
            Date:{type:Date,default:Date.now()}
    })
    const Model=mongoose.models.PublicComments || mongoose.model("PublicComments",schema);
    const newdoc=new Model({
        Comment:msg,
        Date:Date.now()
    });
    await newdoc.save();
    return NextResponse.json({Message:"Added Successfully"});
    }
    catch(e){
       return NextResponse.json({Message:"some error Occured"});
    }
    finally{
        mongoose.disconnect();
    }

}