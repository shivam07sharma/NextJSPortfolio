"use client"
import { useState } from "react"
import Link from "next/link"
const Navbar = () => {
    const [getMenu, setMenu] = useState(false);
    const List = ({ addClass }) => {
        return (
    
            <ul className={`flex ${addClass}  text-white text-sm  md:text-base w-screen md:w-2/4 justify-center md:justify-end py-2 md:py-3 overflow-x-hidden mr-3`}>
                <Link href={"/"}>    <li className="list-none transition-all m-auto md:mx-3 rounded-full px-3 py-1 md:shadow-none shadow-sm shadow-cyan-400  hover:text-cyan-400" onClick={() => { setMenu(!getMenu) }}>Home</li>
                </Link>
                <Link href={"/About"}>    <li className="list-none transition-all m-auto md:mx-3 rounded-full px-3 py-1 md:shadow-none shadow-sm shadow-cyan-400 hover:text-cyan-400" onClick={() => { setMenu(!getMenu) }}>About</li>
                </Link>
                <Link href={"/Projects"}>    <li className="list-none transition-all m-auto md:mx-3 rounded-full px-3 py-1  md:shadow-none shadow-sm shadow-cyan-400 hover:text-cyan-400 " onClick={() => { setMenu(!getMenu) }}>Projects</li>
                </Link>
                <Link href={"/Blogs"}>    <li className="list-none transition-all m-auto md:mx-3 rounded-full px-3 py-1 md:shadow-none shadow-sm shadow-cyan-400  hover:text-cyan-400" onClick={() => { setMenu(!getMenu) }}>Blogs</li>
                </Link>
                <Link href={"/ContactMe"}>    <li className="list-none transition-all m-auto w-max md:mx-3 rounded-full px-3 py-1 md:shadow-none shadow-sm shadow-cyan-400 hover:text-cyan-400" onClick={() => { setMenu(!getMenu) }}>Contact Me</li>
                </Link>
            </ul>
        )
    }
   
    return (
        <>
            <nav className="sticky top-0  z-10 w-screen h-max md:h-16 md:bg-[#2c2e3a] flex justify-between flex-wrap ">
                <div className="text-white w-11/12 text-xl bg-black md:bg-transparent  md:text-2xl md:w-max h-max mx-auto md:mx-14 my-autov py-3 flex justify-between items-center ">
                    <img src="svgs/menu.png" alt="image" className="md:hidden  mx-4 my-auto h-7 hover:rotate-[360deg]" onClick={() => { setMenu(!getMenu) }}/>
                    <div>Portfolio</div>
                </div>
                <List addClass="hidden md:flex" />
                {getMenu && <List addClass="flex md:hidden" />}
            </nav>


        </>
    )
}
export default Navbar;