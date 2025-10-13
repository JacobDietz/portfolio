import contact from "./contact"
import { NavLink } from "react-router"
import * as motion from "motion/react-client"
import Profile from "./profile"
import DynamicBckg from "./background"
import { Link } from "react-router"
import React from "react";


function Home() {
    return (
          <NavBar />
    );
  }
  

export function NavBar() {
    return (
            <nav className="fixed">
                <motion.h1
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="sm:text-6xl md:text-8xl lg:text-9xl font-sans font-medium ml-10 
                    mt-5 tracking-tighter text-white ">Jacob</motion.h1>
                <motion.h2
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="sm:text-8xl md:text-9xl lg:text-9xl font-sans font-medium ml-20 
                    tracking-tighter text-white ">Dietz</motion.h2>

                <ul className="flex">
                    <MainNavLink text={"About Me"} to="profile"></MainNavLink>
                    <MainNavLink text={"Projects"}></MainNavLink>
                    <MainNavLink text={"Resume"}></MainNavLink>
                    <MainNavLink text={"Contact"}></MainNavLink>
                </ul>
            </nav>
    )
}

export function MainNavLink({ text, to, url=`localhost:5173/${to}` }){
    return (
        <motion.li
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
        

            className=" text-white font-sans sm:text-xl md:text-2xl lg:text-4xl font-bold pl-5 pr-5 
            underline sm:decoration-1 md:decoration-3 lg:decoration-5 rounded-xl underline-offset-8">
             <Link to={`/${to}`}>{text}</Link> 
        </motion.li>
    )
}




export default Home;