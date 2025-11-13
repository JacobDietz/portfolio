import ponyExpress from "../assets/ponyExpress.png";
import * as motion from "motion/react-client";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

// export default function Projects() {
//   return (
//     <div className="fixed inset-0 w-[100svw] h-[100svh] bg-customGreen overflow-hidden">
//       <div className="fixed inset-7 border-2 border-customBlue bg-transparent box-border p-4">
//         <section className="flex-col h-1/10">
//           <h1 className="text-7xl md:text-9xl text-projectsBG">Projects</h1>
//           <h2 className="text-5xl md:text-8xl text-customBlue">Web</h2>
//         </section>

//         <section className="">
//           <div className="flex justify-center">
//             <img
//               src={ponyExpress}
//               alt="Pony Express"
//               className="w-1/4 h-1/4 shadow-[0px_0px_10px_0.1px_#ffffff] rounded-xl"
//             />

//     <p>sdfsdfsfsd</p>
// <img
//               src={ponyExpress}
//               alt="Pony Express"
//               className="w-1/4 h-1/4 shadow-[0px_0px_10px_1px_#ffffff] rounded-xl"
//             />

//             <div className="w-10/20 h-10/20 bg-red-300">
//                 <p>sdjfisjfkjskdf</p>

//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 w-[100svw] h-[100svh] bg-customGreen overflow-hidden">
      <div className="absolute inset-4 border-2 border-customBlue bg-transparent box-border p-4 flex flex-col">
        <Link to="/"className="absolute self-end text-projectsBG text-lg md:text-4xl hover:text-red-100">Home</Link>
        {/* Header section */}
        <section className="h-[35%] border-none ">
          <h1 className="text-6xl md:text-9xl text-projectsBG">Projects</h1>
          <h2 className="text-4xl md:text-8xl text-customBlue">Web</h2>
        </section>

        {/* Main content */}
        <section className="flex flex-row h-[90%] border-none relatives">
          {/* Left half - images */}
          <div className="flex flex-col justify-center items-center w-1/2 gap-10">
            <motion.img
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileInView={{ opacity: 1 }}
              alt="Pony Express"
              className="w-1/3 shadow-[0px_0px_10px_0.1px_#ffffff] rounded-xl absolute"
              src="/src/assets/ponyExpress.png"
              onClick={() => {
                console.log("express clicked");
                navigate("/ponyExpress");
              }}
            />

            {/* <img
              alt="Pony Express"
              className="w-1/2 shadow-[0px_0px_10px_1px_#ffffff] rounded-xl"
              src="/src/assets/ponyExpress.png"
            /> */}
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <p className="text-2xl text-projectsBG">Your project info here</p>
          </div>
        </section>
      </div>
    </div>
  );
}
