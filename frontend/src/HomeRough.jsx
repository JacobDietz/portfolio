import contact from "./contact"
import { NavLink } from "react-router"
import * as motion from "motion/react-client"
import Profile from "./profile"
import DynamicBckg from "./background"
import { Link } from "react-router"
import React from "react";

function HomeRough() {
    return (
        <div className="">
            <NavBar />
        </div>
    );
}


export function NavBar() {
    return (
        <nav className="">
            <motion.h1
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="text-6xl sm:text-6xl md:text-9xl lg:text-9xl font-roboto tracking-tighter font-medium ml-10 
                    mt-5 tracking-tighter text-white ">Jacob</motion.h1>
            <motion.h1
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-9xl font-sans font-medium ml-20 
                    tracking-tighter text-white ">Dietz</motion.h1>

            <ul className="flex">
                <MainNavLink text={"Projects"} url="/projects"></MainNavLink>
                <MainNavLink text={"GitHub"} url={"https://github.com/JacobDietz"}></MainNavLink>
                <MainNavLink text={"Resume"} url="resume.pdf"></MainNavLink>
                <MainNavLink text={"Contact"} url="/contact"></MainNavLink>
            </ul>
        </nav>
    )
}

export function MainNavLink({ text, url }) {

    let externalLink = url?.endsWith(".pdf") || url.startsWith("https")


    return (
        <motion.li
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}


            className=" text-white font-roboto text-base sm:text-xl md:text-2xl lg:text-4xl font-bold pl-4 pr-4 
            underline sm:decoration-1 md:decoration-3 lg:decoration-5 rounded-xl underline-offset-8">

            {externalLink ? (
                <a href={`${url}`} target="_blank">{text}</a>
            ) :
                <Link to={`${url}`}>{text}</Link>
            }
        </motion.li>
    )
}




export default HomeRough;