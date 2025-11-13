import { Link } from "react-router"
import * as motion from "motion/react-client";

export default function NavBar() {
    return (
        <nav className="">
            <div className="">
                <motion.h1
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="leading-none m-0 text-6xl sm:text-6xl md:text-9xl font-roboto tracking-tighter font-medium ml-10 
                    tracking-[-0.03em] md:tracking-[-0.09em] text-white">Jacob</motion.h1>
                <motion.h1
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="leading-none -mt-2rem md:-mt-8 sm:text-8xl md:text-9xl lg:text-9xl font-sans font-medium ml-20 
                tracking-[-0.03em] md:tracking-[-0.05em] text-white ">Dietz</motion.h1>
            </div>

            <ul className="flex">
                <MainNavLink text={"Projects"} url="/projects"></MainNavLink>
                <MainNavLink text={"GitHub"} url={"https://github.com/JacobDietz"}></MainNavLink>
                <MainNavLink text={"linkedin"} url="https://www.linkedin.com/in/jacob-dietz-8851b8222/"></MainNavLink>
                <MainNavLink text={"Resume"} url="resume.pdf"></MainNavLink>
                <MainNavLink text={"Contact"} url="/contact"></MainNavLink>
            </ul>
        </nav>
    )
}

function MainNavLink({ text, url }) {

    let externalLink = url?.endsWith(".pdf") || url.startsWith("https")

    return (
        <motion.li
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}


            className=" text-white font-roboto text-base text-lg md:text-xl lg:text-3xl font-bold pl-4 pr-4 
            underline sm:decoration-1 md:decoration-3 lg:decoration-5 rounded-xl underline-offset-8">

            {externalLink ? (
                <a href={`${url}`} target="_blank">{text}</a>
            ) :
                <Link to={`${url}`}>{text}</Link>
            }
        </motion.li>
    )
}

