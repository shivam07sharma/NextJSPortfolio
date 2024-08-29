import React from 'react';
import "../globals.css"
let colors = ["bg-red-300", "bg-green-500", "bg-yellow-500", "bg-cyan-500", "bg-blue-700", "bg-fuchsia-600", "bg-orange-600", "bg-lime-500", "bg-red-600", "bg-slate-600"];
const extraSkills = ["Problem-solving and Analytical skills", "Team Collaboration", "Communication"]
const getRandomColor = () => {
  const x = Math.ceil(Math.random() * (colors.length - 1));
  console.log(x);
  return x;
}
const Aboutme = () => {
  return (
    <>

      <div className='w-[100vmin] min-h-screen  max-h-max py-3 mx-auto bg-black mb-14'>
        <div className='text-2xl md:text-4xl  mx-auto w-max text-white my-5 font-semibold'>ABOUT MYSELF</div>
        <div className='w-full h-max my-5 grid place-content-center image-transition'>
          <img src="svgs/about.png" alt="" className='image-transition'/>
        </div>
        <div className='my-9 w-11/12 mx-auto'>
        <h2 className='text-white text-xl md:text-2xl  my-5 w-full font-normal mx-auto text-center'>
          Hey There! <br/> Myself Shivam Sharma and I  am a Proficient Web Developer from Kanpur Uttar Pradesh.
        </h2>
        </div>
        <div className='my-5 mx-auto w-screen font-semibold  flex gap-2 flex-wrap'>
          <h2 className='text-white text-xl md:text-2xl my-5 w-screen block font-semibold mx-1'>EDUCATIONAL QUALIFICATIONS</h2>
          <Education course={"BACHELORS OF COMPUTER APPLICATIONS"} institute={"CSJMU KANPUR, UTTAR PRADESH"} date={"2022-2025"} marks={"7.78 CGPA"}/>
          <Education course={"INTERMEDIATE"} institute={"UP BOARD"} date={"2022"} marks={"72%"}/>
          <Education course={"HIGH SCHOOL"} institute={"UP BOARD"} date={2020} marks={"80%"}/>

        </div>
        <DisplaySkills/>
        <div className='w-11/12 mx-auto'>
          <h2 className='text-white text-xl md:text-2xl my-7 w-full font-semibold mx-1'>ADDITIONAL SKILLS</h2>
          <div className=' flex flex-col gap-3'>
            {extraSkills.map(skill => (
              <ExtraSkill key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
const DisplaySkills=()=>{
const mySkills = ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "Tailwind CSS", "ReactJS", "NodeJS", "ExpressJS", "NextJS"];
  const Skill = ({ name }) => {
    return (
      <>
        <div className='w-[48%] h-10 border-2 border-gray-700 rounded-md pl-4 text-white text-lg font-medium flex items-center active::w-11/12  transition-all colorTransition hover:justify-center mx-auto'>{name}</div>
      </>
    )
  }
  return(
    <>
    <div className='w-11/12 my-3 flex  gap-3 items-center mx-auto flex-wrap h-max justify-between'>
          <h2 className='text-white text-xl md:text-2xl my-5 w-full font-semibold mx-1'>TECHNICAL SKILLS</h2>
          {mySkills.map(item => (
            <Skill key={item} name={item} />
          ))}
        </div>
    </>
  )
}

const ExtraSkill = ({ name }) => {
  return (
    <>
      <div className='w-full min-h-10 max-h-max border-2 border-gray-700 rounded-md pl-4 text-white text-lg font-medium flex items-center active:w-11/12  hover:justify-center mx-auto true-black '>{name}</div>
    </>
  )
}
const Education = ({course,institute,date,marks}) => {
  return (
    <>
      <div className='w-full md:w-72 bg-[#050a44] h-max mx-1 p-4 border-2 border-white flex flex-col gap-3 text-white rounded-md card'>
        <h3 className='w-full text-lg font-normal'>{course}</h3>
        <hr />
        <h4 className=''>{institute}</h4>
        <div className='text-base font-normal flex justify-between'>

        <h4 className='w-1/2 text-left text-base font-normal'>({date})</h4>
        <h4 className='w--[48%] text-right text-base font-normal'>{marks}</h4>
        </div>
      </div>
    </>
  )
}
export {Aboutme, DisplaySkills};
export default Aboutme;
