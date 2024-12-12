"use client"
import React, { useRef } from 'react'
import "../globals.css"
import Media from './mediaLinks';
import Link from 'next/link';
const Footer = () => {
  const handleSubmit=()=>{
    buttonref.current.style.backgroundColor="green";
    buttonref.current.innerHTML="Thanks";
    buttonref.current.type="none"
    const comment=document.getElementById("comment");
    fetch("/api/AddComment",{
      method:"POST",
      body:JSON.stringify(comment.value),
      headers: {
        "Content-type": "application/json",
      },
    })
  }
  const buttonref=useRef(0);
  return (
    <>
    <footer className=' w-screen h-max py-5 bg-[#050a44] border-t-4 border-white mt-10'>
      <div className='w-[98vmin] mx-auto flex flex-col justify-around items-center'>
        
            <div className='w-full h-max mx-auto flex flex-wrap gap-1 items-center justify-center'>
              <input type="text" id='comment' placeholder='Add a Comment...' className='w-11/12 md:w-[calc(98vmin-132px)] h-10 my-3 rounded-md px-2 mx-auto bg-white hover:bg-slate-200 outline-none'/>
             <button type="submit" ref={buttonref} onClick={()=>{handleSubmit()}} className='w-11/12 text-center bg-blue-700 text-white text-base font-medium  md:w-32 rounded-md h-10 px-1 active:bg-red-800 get-transition'>
              Add Comment</button>
            </div>
            <div className='w-full h-max my-3 text-white text-sm font-normal mx-auto'>
              <ul className='w-full my-2 flex flex-col gap-2'>
                  
              <Link href="/ContactMe" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>Send a Message</li>
                  </Link>
                <Link href="mailto:shivam0701sharma@gmail.com" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>Email : shivam0701sharma@gmail.com</li>
                  </Link>
                  <Link href="/Projects" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>View Projects</li> </Link>
                  <Link href="https://github.com/shivam07sharma" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>View Github</li>
                  </Link>
                  <Link href="https://www.linkedin.com/in/shivamsharma0701" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>Connect on LinkedIn</li>
                  </Link>
                  <Link href="https://www.instagram.com/sh.ivem/?utm_source=ig_web_button_share_sheet" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>Instagram</li>
                  </Link>
                  <Link href="/Blogs" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>Read Blogs</li>
                  </Link>
                  <Link href="/ContactMe" className='no-underline mx-auto md:mx-0'>
                  <li className='list-none'>Feedback</li>
                  </Link>
                  
              </ul>
            </div>
            <div className='h-10 my-2 overflow-hidden'>
            <Media width={"w-20 mix-blend-screen"}/>
            </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
