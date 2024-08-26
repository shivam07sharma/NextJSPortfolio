"use client"
import "./globals.css";
import Media from "./components/mediaLinks";
import { DisplaySkills } from "./About/page";
function Homepage(){
  return(<>
        
      <div className='lg:flex mb-9 '>
      <div className=' w-screen md:w-1/2 h-max my-7 md:h-[60vh] md:my-auto'>
        <div className='text-2xl md:text-4xl mt-7 text-white w-5/6 lg:w-2/3 h-max md:h-full  flex flex-col justify-center  py-9 mx-auto '>
          <div className='flex flex-col justify-center w-full h-max gap-2'>

            <div>Hi, My name is Shivam</div>
            <div>and I am a Passionate</div>
            <div className='whitespace-nowrap overflow-hidden typing-animation text-cyan-300'  >Web Developer</div>
          </div>
          <div className=' flex mt-16 '>
          <a href="https://drive.google.com/file/d/11qf3XNgarsebOZXHBFPqv7xW-Xiq6HfN/view?usp=drivesdk">  <div className="w-max h-9 px-2 bg-[#050a44] hover:bg-red-900 my-auto border-white border-2 rounded-lg flex items-center text-white text-base">Download Resume</div>
          </a>
          <a href="https://www.github.com/shivam07sharma"> <div className="w-max h-9 px-2 bg-[#050a44]  hover:bg-red-900 mx-4 my-auto border-white border-2 rounded-lg flex items-center  text-white text-base">Visit Github</div>
          </a>

          </div>
        </div>
      </div>
      <div className=' w-screen md:w-1/2 h-auto lg:h-[90vh] grid place-content-center'>
       <img src="images/image1.jpg" alt="" className=' mx-auto my-auto mix-blend-lighten w-8/12 h-auto bg-cover rounded-full ' style={{ boxShadow:"0px 0px 40px rgb(103 232 249)"}} />
      </div>
      </div>
   <div className='w-11/12 h-1 border-b-4 border-white mx-auto mt-5'></div>
   <div className=' text-white text-xl my-8 w-11/12 mx-auto'>Contact Me :</div>
   <div className=' text-white h-10 text-xl my-5 w-11/12 mx-auto '> <Media width={"w-[90vw]"} /></div>
   <div className="w-screen md:w-[80vw] h-max py-3 mx-auto bg-black flex flex-col md:flex-row items-center md:justify-around mb-9">
    <img src="svgs/about2.svg" className="w-11/12 md:w-2/6 max-h-52 md:h-fit hover:scale-105 get-transition" alt="" />
   <DisplaySkills/>
   </div>
  </>)
}
export default Homepage;