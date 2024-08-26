import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req){
    try {
        await mongoose.connect(process.env.MONGODB_URI+"Portfolio", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const schema=new mongoose.Schema({
            Name:String,
            Email:String,
            Phone:{type:String,required:false},
            Message:String,
            Time:{type:Date,default:Date.now()}
        });
        const Model=mongoose.models.ContactMe|| mongoose.model("ContactMe",schema);
        let data =await req.json();
        let { Name, Email, Phone, Message } =await data;
        const newMessage = new Model({
            Name: Name,
            Email: Email,
            Phone: Phone,
            Message: Message,
            Time:Date.now()
        })
        await newMessage.save();
       return NextResponse.json({status:200,Message:"Message Sent Successfully!"});
    }
    catch(e){
        return NextResponse.json({status:400,Message:"Some Error Occured! Please Try Later."});
    }
    finally{
        mongoose.disconnect();
    }
}

