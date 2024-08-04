
'use client'
import { useState } from "react";
import MortCalc from "./Components/MortCalc";

export default function Home() {
  
    
  return (
    <main
      className="flex items-center justify-center md:p-24 w-[100vw] md:h-screen bg-[#e3f4fc]"
      // style={{ margin: "0 auto" }}
    >
      <MortCalc/>
    </main>
  );
}
