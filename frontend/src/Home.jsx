import contact from "./contact"
import { NavLink } from "react-router"
import * as motion from "motion/react-client"
import Profile from "./profile";
 
function Home() {
    return (

        <div className="flex-row ">
            <NavBar>
            </NavBar>
            <Profile></Profile>
        </div>
    )
}

export function NavBar() {
 {/*<div className="sm:h-50 md:h-100 lg:h-150">*/}
    return (
          <div className="h-[190dvh]">
            <nav className="fixed">
                <motion.h1
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-medium ml-10 mt-5 tracking-tighter text-white ">Jacob</motion.h1>
                <motion.h2
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-medium ml-20 tracking-tighter text-white ">Dietz</motion.h2>

                <ul className="flex row ">
                    <MainNavLink text={"About Me"}></MainNavLink>
                    <MainNavLink text={"Projects"}></MainNavLink>
                    <MainNavLink text={"Resume"}></MainNavLink>
                    <MainNavLink text={"Contact"}></MainNavLink>
                </ul>
            </nav>
        </div>
    )
}

export function MainNavLink({ text }) {
    return (
        <motion.li
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}

            className=" text-white font-sans sm:text-xl md:text-2xl lg:text-4xl font-bold pl-5 pr-5 
            underline sm:decoration-1 md:decoration-3 decoration-5 rounded-xl underline-offset-8"><a href="#profile">{text}</a>
        </motion.li>
    )
}




export default Home;