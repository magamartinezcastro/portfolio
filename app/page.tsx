"use client";

import Museos from "./ui/museos_nuevo";
import { textSize } from "./lib/classes";
import Portada from "./ui/portada";
import { Trabajos } from "./ui/trabajos";
import React, { Suspense } from "react";
import Slider from "./ui/slider";

export default function About() {
  return (
    <main
      className={`min-h-screen bg-white text-black flex flex-col ${textSize}`}
    >
      <Slider />
      <div className="flex flex-col md:gap-y-[107px] gap-y-[66px] mt-[2em] md:mb-[87px] mb-[46px]">
        <Portada />
        <Trabajos />
        <Museos />
      </div>
    </main>
  );
}
