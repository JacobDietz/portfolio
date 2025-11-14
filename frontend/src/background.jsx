import React from "react";
import './index.css';
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

export default function DynamicBckg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-r from-black via-gray-950 to-black">
        <section className="absolute blur-3xl opacity-90 bg-sky-300 rounded-4xl border-3 border-dotted h-[30dvh] aspect-square -translate-x-20 translate-y-20"></section>
        <section className="absolute blur-3xl opacity-90 bg-amber-300 rounded-4xl h-[30dvh] aspect-square -translate-x-20 -translate-y-20"></section>
        <section className="absolute blur-3xl opacity-90 bg-lime-600 rounded-4xl h-[30dvh] aspect-square translate-x-20 translate-y-20"></section>
        <section className="absolute blur-3xl opacity-90 bg-red-300 rounded-4xl h-[30dvh] aspect-square translate-x-20 -translate-y-20"></section>
        <section className="absolute bg-indigo-400 rounded-4xl blur-3xl opacity-90 h-[30dvh] aspect-square flex items-center justify-center"></section>
      </div>

    </div>
  );
}
