"use client"
import React, { useEffect, useState } from 'react';
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
          <img src="svgs/about.png" alt="" className='image-transition' />
        </div>
        <div className='my-9 w-11/12 mx-auto'>
          <h2 className='text-white text-lg md:text-2xl  my-5 w-full font-normal mx-auto text-center'>
            Hey There! <br /> Myself Shivam Sharma and I  am a Proficient Web Developer from Kanpur Uttar Pradesh.
          </h2>
        </div>
        <div className='my-5 mx-auto w-screen font-semibold  flex gap-2 flex-wrap'>
          <h2 className='text-white text-xl md:text-2xl my-5 w-11/12 md:w-screen block font-semibold md:mx-1 ml-4'>EDUCATIONAL QUALIFICATIONS</h2>
          <Education course={"BACHELORS OF COMPUTER APPLICATIONS"} institute={"CSJMU KANPUR, UTTAR PRADESH"} date={"2022-2025"} marks={"7.78 CGPA"} />
          <Education course={"INTERMEDIATE"} institute={"UP BOARD"} date={"2022"} marks={"72%"} />
          <Education course={"HIGH SCHOOL"} institute={"UP BOARD"} date={2020} marks={"80%"} />

        </div>
       
        <DisplaySkills />
        <div className='w-11/12 mx-auto'>
          <h2 className='text-white text-xl md:text-2xl my-7 w-full font-semibold mx-1'>ADDITIONAL SKILLS</h2>
          <div className=' flex flex-col gap-3'>
            {extraSkills.map(skill => (
              <ExtraSkill key={skill} name={skill} />
            ))}
          </div>
        </div>
        <ShowCertificates />
      </div>
    </>
  )
}
const DisplaySkills = () => {
  const mySkills = ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "Tailwind CSS", "ReactJS", "NodeJS", "ExpressJS", "NextJS", "Git", "GitHub", "SQL", "Data Structure and Algorithms"];
  const Skill = ({ name }) => {
    return (
      <>
        <div className='min-w-[48%] max-w-fit h-10 border-2 border-gray-700 rounded-md  text-white text-sm md:text-lg font-normal md:font-medium flex items-center active::w-11/12  transition-all colorTransition hover:justify-center mx-auto px-4 appear-animation'>{name}</div>
      </>
    )
  }
  return (
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
      <div className='w-full min-h-10 max-h-max border-2 border-gray-700 rounded-md pl-4 text-white text-sm font-normal md:text-lg md:font-medium flex items-center active:w-11/12  hover:justify-center mx-auto true-black '>{name}</div>
    </>
  )
}
const Education = ({ course, institute, date, marks }) => {
  return (
    <>
      <div className='w-11/12 md:w-72 bg-[#050a44] h-max mx-auto md:mx-1 p-4 border-2 border-white flex flex-col gap-3 text-white rounded-md card'>
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
const ShowCertificates = () => {
  const CertImages = ["oopsjavaLits.jpg", "dataScience.jpg","excel.jpg"];
  const CertTitle = ["Java OOPS Training By LITS, Kanpur", "Data Science and Analysis By HP Foundation","Introduction to MS Excel By Coursera"]
  const [CertIndex, setCertIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCertIndex((CertIndex + 1) % CertImages.length)
    }, 3000);
  }, [CertIndex]);
  const Certificate = () => {
    return (
      <>
        <div className='overflow-hidden bg-slate-950  my-18  flex flex-col justify-center items-center md:h-[50vh] md:w-[80vw] w-[80vw] h-[40vh] bg-contain'>
        <img src={"/certificates/"+CertImages[CertIndex]} alt="About Myself" className=' object-contain w-full h-full transition-all' />
       </div>
      </>
    )
  }
  return (<>
    <div className="w-11/12 h-max mx-auto">
      <div className="my-10 text-white text-xl md:text-2xl  font-semibold mx-1"> {"Certificates Acquired".toUpperCase()}</div>
    </div>
    <div className='w-full h-max flex items-center justify-between scroll-animat'>
    <div className='w-10 h-10  p-2 rounded-full text-2xl shadow-lg shadow-blue-700 mx-2 md:mx-5 grid place-content-center text-white font-extrabold active:bg-slate-700 '
        onClick={() => { setCertIndex(CertIndex < 1 ? CertImages.length : CertIndex - 1) }}>
        {"<"}</div>
      <Certificate />
      <div className='w-10 h-10   p-2 rounded-full text-2xl shadow-lg shadow-blue-700 mx-2 md:mx-5 grid place-content-center text-white font-extrabold active:bg-slate-700'
        onClick={() => { setCertIndex((CertIndex + 1) % CertImages.length) }}>
        {">"}</div>
    </div>
    <h3 className='inline-block text-xs md:text-sm font-normal  w-full mx-auto text-center text-white my-5'>{CertTitle[CertIndex]}</h3>
    <div className='w-full h-8 grid place-content-center'>
    <a href={"/certificates/"+CertImages[CertIndex]} className='my-2 w-22 h-8'>
    <button className='border-2 border-blue-700 text-xs text-white rounded-md w-20 h-8  active:bg-red-950'>VIEW</button></a>
    </div>

  </>)
}
export { Aboutme, DisplaySkills };
export default Aboutme;
