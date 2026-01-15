import React from "react";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { HomeTunnel } from "./threeTunnel";
import DynamicBckg from "./background";
// import ContactBar from "./components/contactBar";

// import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import { useState } from 'react'

// export function MyModal() {
//   let [isOpen, setIsOpen] = useState(true)

//   function open() {
//     setIsOpen(true)
//   }

//   function close() {
//     setIsOpen(false)
//   }

//   return (
//     <>
//       <Button
//         onClick={open}
//         className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
//       >
//         Open dialog
//       </Button>

//       <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4">
//             <DialogPanel
//               transition
//               className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
//             >
//               <DialogTitle as="h3" className="text-base/7 font-medium text-white">
//                 Payment successful
//               </DialogTitle>
//               <p className="mt-2 text-sm/6 text-white/50">
//                 Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
//                 order.
//               </p>
//               <div className="mt-4">
//                 <Button
//                   className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
//                   onClick={close}
//                 >
//                   Got it, thanks!
//                 </Button>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   )
// }



function Home() {
  return (
    <>
      <HomeTunnel.In>
        <EffectComposer>
          <Fluid
            showBackground={false}
            blend={30}
            intensity={20}
            swirl={5}
            distortion={10}
            pressure={0.05}
            radius={0.1}
            fluidColor="#FFC0CB"
          />
        </EffectComposer>
      </HomeTunnel.In>
      {/* <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <ContactBar />
      </div> */}
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <MyModal title="hello"
          text="test"/> */}
          <NavBar />
        </motion.div>
      </div>
    </>
  );




}

export default Home;
