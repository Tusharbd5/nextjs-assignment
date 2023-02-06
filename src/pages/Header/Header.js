import { useState } from "react"
import Banner from "../Banner/Banner"
function MobileNav({ open, setOpen }) {

    return (
        <section>
            <div className="flex flex-row items-center justify-around long-menu">
                <div>
                    <a className="font-bold my-4" href=".." >
                        <span className="logo ">Gym</span>
                        baran
                    </a>
                </div>
                <div className="flex gap-8 my-4 justify-center items-center">

                    <a className="text-red-500 my-4 font-poppins" href="#" >
                        Home
                    </a>
                    <a className="my-4 hover:text-red-500 font-poppins" href="#" >
                        Program
                    </a>
                    <a className="my-4 hover:text-red-500 font-poppins" href="#" >
                        Blog
                    </a>
                    <a className="my-4 hover:text-red-500 font-poppins" href="routes/about" >
                        About Us
                    </a>
                    <button className="login-btn hover:bg-blue-700 text-white font-poppins">Login</button>
                </div>
            </div>


            <div className={`items absolute top-0 right-0 p-5 rounded-3xl  bg-slate-200  transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter z-10`}>

                <div className="flex flex-col justify-center items-center mt-6">
                    <a className="text-2xl font-light text-red-500 my-2 font-poppins" href=".." >
                        Home
                    </a>
                    <a className="text-2xl font-light my-2 hover:text-red-500 font-poppins" href="#" >
                        Program
                    </a>
                    <a className="text-2xl font-light my-2 hover:text-red-500 font-poppins" href="#" >
                        Blog
                    </a>
                    <a className="text-2xl font-light my-2 hover:text-red-500 font-poppins" href="routes/about" >
                        About Us
                    </a>
                    <button className="login-btn hover:bg-blue-700 text-white font-poppins">Login</button>
                </div>
            </div>
        </section>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex items-center humbarger-menu p-5 bg-white">
                <div>
                    <a className="font-bold" href="#">
                        <span className="logo">Gym</span>
                        baran
                    </a>
                </div>

                <div className="w-11/12 flex justify-end items-center">

                    <div className="group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </div>
            </div>
            <Banner></Banner>
        </nav>
    )
}
