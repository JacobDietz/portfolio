
import * as motion from "motion/react-client";
import { useNavigate } from "react-router";


export default function InfoSnippet() {
  let navigate = useNavigate();
    return (
      <section className="flex md:flex-row h-[90%] relative items-center">
        <div className="flex justify-center md:items-center  h-2/5 w-full items-center">
          <motion.img
            whileHover={{ scale: 1.02 }}
            alt="Pony Express"
            className="w-3/5 shadow-[0px_0px_42px_8px_#d5e7f2] rounded-xl backdrop-blur-xl "
            src="/ponyExpress.png"
            onClick={() => {
              navigate("/ponyExpress/1");
            }}
          />
        </div>
  
        <motion.div
          initial={{ x: 300, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="w-4/5 flex h-1/2 justify-center items-center"
        >
          <Description
            title="Pony Express"
            description="Full stack web application"
          />
        </motion.div>
      </section>
    );
  }
  