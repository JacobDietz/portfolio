import React from "react";
import './index.css';
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

export default function DynamicBckg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Tailwind-colored blobs */}
      {/* <div className="absolute inset-0 flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-r from-indigo-200 via-zinc-100 to-slate-300"> */}
      <div className="absolute inset-0 flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-r from-slate-700 via-zinc-600 to-slate-600">
        <section className="absolute blur-3xl opacity-90 bg-sky-300 rounded-4xl border-3 border-dotted h-[30dvh] aspect-square -translate-x-20 translate-y-20"></section>
        <section className="absolute blur-3xl opacity-90 bg-amber-300 rounded-4xl h-[30dvh] aspect-square -translate-x-20 -translate-y-20"></section>
        <section className="absolute blur-3xl opacity-90 bg-lime-600 rounded-4xl h-[30dvh] aspect-square translate-x-20 translate-y-20"></section>
        <section className="absolute blur-3xl opacity-90 bg-red-300 rounded-4xl h-[30dvh] aspect-square translate-x-20 -translate-y-20"></section>
        <section className="relative bg-indigo-400 rounded-4xl blur-3xl opacity-90 h-[30dvh] aspect-square flex items-center justify-center"></section>
      </div>

      {/* Transparent WebGL fluid distortion layer */}
      {/* <Canvas
        gl={{ preserveDrawingBuffer: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <EffectComposer>
          <Fluid
            showBackground={false}
            intensity={9}
            swirl={50}
            fluidColor="#6E1B09"
            rainbow={true}
            blend={5}
            distortion={2}
            pressure={0.2}
            velocityDissipation={0.45}
            densitionDissipatio={0}
            curl={10}
            radius={0.25}
            vorticity={30}
            
          />
        </EffectComposer>
      </Canvas> */}
    </div>
  );
}
