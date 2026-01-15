import React from "react";
import "./index.css";

export default function DynamicBckg() {
  return (
    <>
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-300 via-gray-200 to-gray-200">
          <section className="absolute blur-3xl opacity-90 bg-sky-300 rounded-[4rem] h-[30dvh] aspect-square -translate-x-20 translate-y-20"></section>
          <section className="absolute blur-3xl opacity-90 bg-lime-200 rounded-[4rem] h-[30dvh] aspect-square -translate-x-20 -translate-y-20"></section>
          <section className="absolute blur-3xl opacity-90 bg-lime-600 rounded-[4rem] h-[30dvh] aspect-square translate-x-20 translate-y-20"></section>
          <section className="absolute blur-3xl opacity-90 bg-red-300 rounded-[4rem] h-[30dvh] aspect-square translate-x-20 -translate-y-20"></section>
          <section className="absolute blur-3xl opacity-90 bg-indigo-400 rounded-[4rem] h-[30dvh] aspect-square"></section>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-3 border-2 border-white rounded-md"></div>
      </div>
    </>
  );
}
