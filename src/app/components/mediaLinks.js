import Link from "next/link";
import Image from "next/image";
import "../globals.css"
const Media = (props) => {
    return (
        <>
            <div className={`w-max h-72 flex gap-5 mx-auto` + props.width}>
                <Link href={"https://github.com/shivam07sharma"}>
                    <div className="h-6   w-6 overflow-hidden hover:shadow-sm  transition-all hover:scale-110 rounded-full hover:rotate-[360deg]"><Image src="/images/githubicon3.png" width={100} height={100} className="scale-105" alt="" /></div>
                </Link>
                <Link href={"https://www.linkedin.com/in/shivamsharma0701"}>
                    <div className="h-7 rounded-xl w-7 overflow-hidden  hover:shadow-sm  transition-all hover:scale-110 hover:rotate-[360deg]"><Image src="/images/linkedinicon.png" width={100} height={100} alt="" /></div>
                </Link>
                <Link href={"https://www.instagram.com/sh.ivem/?utm_source=ig_web_button_share_sheet"}>
                    <div className="h-7 rounded-xl w-7 overflow-hidden   hover:shadow-sm  transition-all hover:scale-110 hover:rotate-[360deg]"><Image src="/images/instaicon4.png" width={100} height={100} alt="" /></div>
                </Link>
                <Link href={"@shivam0701sharma@gmail.com"}>
                    <div className="h-7 rounded-xl w-7 overflow-hidden hover:shadow-sm  transition-all hover:scale-110 hover:rotate-[360deg]"><Image src="/images/xicon.png" width={100} height={100} className="scale-110" alt=""  /></div>
                </Link>

            </div>
        </>
    )
}
export default Media;