import contact from "./contact.js"
import { NavLink } from "react-router"
import * as motion from "motion/react-client"






function Home() {
    return (

        <div className="flex-row">
            <NavBar>

            </NavBar>
            <section className="bg-blue-200 w-500 h-500">
                <div id="profile">profile</div>

            </section>
        </div>

    )
}

export function NavBar() {

    return (
        <div className="h-100">
            <nav className="fixed">
                <motion.h1
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="text-9xl font-sans font-medium ml-10 mt-5 tracking-tighter text-white ">Jacob</motion.h1>

                <motion.h2
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="text-5xl font-sans font-medium ml-20 tracking-tighter text-white ">Dietz</motion.h2>

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

            className=" text-white font-sans text-3xl font-bold pl-5 pr-5 
            underline decoration-5 rounded-xl underline-offset-8"><a href="#profile">{text}</a>
        </motion.li>
    )
}

export default Home;