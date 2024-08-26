"use client"
import { useForm } from "react-hook-form";
import Media from "../components/mediaLinks";
import { useState } from "react";

const ContactPage =  () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [msgSent,setMsg]=useState(false);
    const [showError,setError]=useState(false);
    
    const onSubmit = async (data) => {
        console.log(data);
       fetch("/api/ContactSubmit", { 
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
        .then(res=>res.json())
        .then(res=>{if(res.status==200){setMsg(true);console.log(res.Message)}});
       
    };



return (
    <>
        <div className="w-[88vmin] h-max mx-auto my-10  " >
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-11/12 h-full   flex-col justify-center items-center gap-5">

                <input className="w-full h-8 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a]  focus:text-white active::border-2 active::border-white text-sm px-2" type="text" placeholder="Enter Name" {...register("Name", {
                    required: { value: true, message: "*This field is Required" }
                })} />
                <input className="w-full h-8 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] active::border-2 active::border-white focus:text-white text-sm px-2 " type="email" placeholder="Enter Your Email" {...register("Email", {
                    required: { value: true, message: "*This field is Required" }
                })} />
                <input className="w-full h-8 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] active::border-2 active::border-white focus:text-white text-sm px-2 " type="text" placeholder="Contact No.(Optional)" {...register("Phone")
                } />

                <textarea className="w-full min-h-32 max-h-max py-3 px-2 rounded-lg text-[black] font-normal focus:bg-[#2c2e3a] active::border-2 active::border-white focus:text-white text-sm  " type="text" placeholder="Enter Your Message" {...register("Message", {
                    required: { value: true, message: "*This field is Required" }
                })} /> 
             
                {(errors.Message || errors.Name ||errors.Email) ? 
                  <button className={`w-max px-4 py-1 h-max mt-4 bg-red-600 text-white rounded-lg  transition-all `} >All Fields are Required</button>

                  :<button className={`w-max px-5 py-1 h-max mt-4 bg-[#0a21c0] text-white rounded-lg active:bg-[#2c2e3a] hover:rounded-full transition-all ${msgSent && "bg-green-400"}`} type="submit">{msgSent?"Thanks For Contacting Us :)":"Send"}</button>}
                 
            </form>
        </div>
        <div className=" my-14 w-[88vmin] mx-auto">
            <Media width={"w-full"}/>
        </div>
    </>

)
};


export default ContactPage;
