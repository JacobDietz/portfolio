import { Link } from "react-router";
import * as motion from "motion/react-client";

export default function NavBar() {
  return (
    <nav className="">
      <div className="">
        <motion.h1
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="leading-none m-0 text-6xl md:text-9xl font-roboto tracking-tighter font-medium ml-10 
                    tracking-[-0.03em] md:tracking-[-0.09em] text-white"
        >
          Jacob
        </motion.h1>
        <motion.h1
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="leading-none -mt-2rem md:-mt-8 text-6xl md:text-9xl lg:text-9xl font-sans font-medium ml-20 
                tracking-[-0.03em] md:tracking-[-0.05em] text-white "
        >
          Dietz
        </motion.h1>
      </div>

      <ul className="flex">
        <MainNavLink text={"Projects"} url="/projects"></MainNavLink>
        <MainNavLink
          text={"Github"}
          url={"https://github.com/JacobDietz"}
        ></MainNavLink>
        <MainNavLink
          text={"linkedin"}
          url="https://www.linkedin.com/in/jacob-dietz-8851b8222/"
        ></MainNavLink>
        <MainNavLink text={"Resume"} url="resume.pdf"></MainNavLink>
        <MainNavLink text={"Contact"} url="/contact"></MainNavLink>
      </ul>
      <ul>
        {/* <ContactInfo text={"jacobdietz2383@gmail.com"}>
        <a href="mailto:jacobdietz2383@gmail.com?subject=Portfolio&Site">Email Us</a>
        </ContactInfo> */}
      </ul>
    </nav>
  );
}

function MainNavLink({ text, url }) {
  let externalLink = url?.endsWith(".pdf") || url.startsWith("https");

  return (
    <motion.li
      whileHover={{ scale: 1.25 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileInView={{ opacity: 1 }}
      className=" text-white font-roboto text-base text-lg md:text-xl lg:text-3xl font-bold md:pl-4 md:pr-4 px-2
      sm:decoration-1 md:decoration-3 lg:decoration-5 rounded-xl"
    >
      {externalLink ? (
        <a href={`${url}`} target="_blank">
          {text}
        </a>
      ) : (
        <Link to={`${url}`}>{text}</Link>
      )}
    </motion.li>
  );
}

