"use client"
import React, { useState } from 'react'
import "../globals.css"
import Link from 'next/link';
const MyBlogs = () => {
    const [Blogs,setBlogs]=useState(null);
    const [Loading,setLoading]=useState(true);
    const [Error,setError]=useState(false);
    useState(()=>{
        setLoading(true);
        fetch("/api/GetBlogs")
        .then(res=>res.json())
        .then(res=>{if(res.status==200){setBlogs(res.data)}else{setError(true)}setLoading(false)});
    })
  return (
   <>
   {Loading && <LoadingBar/>}
    { Blogs &&
     <div className='w-screen md:w-[100vmin] h-max flex flex-col md:flex-row flex-wrap gap-6 justify-evenly items-center mx-auto my-4'>
    {Blogs.map(blog=>(
       <Link key={blog._id} href={`https://webblogshare.netlify.app/BlogPost/${blog._id}`}> <Blog image={blog.image} title={blog.title} cont={blog.content}/> </Link>
    ))}
    </div> 
    }
    {Error && 
    <div className='w-max h-20 text-red-500 font-semibold text-lg mx-auto my-[calc(45vh-48px)]'>
        Something Went Wrong! Please Try Again.
    </div>
    }
   </>
  )
}

const LoadingBar=()=>{
    return(
        <>
            <div className='w-12 h-12 rounded-full border-4 border-t-black border-white my-[calc(45vh-48px)] mx-auto  animate-spin'></div>
        </>
    )
}
const Blog=({image,title,cont})=>{
    return(
        <>
        <div className='w-11/12 md:w-[46vmin] min-h-52 max-h-max border-white border-2 rounded-md flex flex-col justify-between mx-auto bg-black overflow-hidden'>
            <div className='w-full h-max max-h-52 overflow-hidden'>
                {image && <img src={image} alt={title} className='w-full h-max'/>}
            </div>
            <div className='text-white text-lg px-4 my-3 line-clamp-2'>
                {title}
            </div>
            <div className='text-sm px-4 text-slate-300 line-clamp-4'>
                {cont}
            </div>
            <div className='w-24 h-6   my-4 text-sm  rounded-sm shadow-sm shadow-white text-center grid place-content-center font-normal mx-4 bg-black text-white'>
                Read More
            </div>
        </div>
        </>
    )
}
export default MyBlogs;
