"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="relative h-[120vh] bg-[#1e1e1e] overflow-hidden flex items-center">
  
  {/* BACKGROUND */}
  <div className="absolute inset-0 opacity-100">
    <div className="w-full h-full bg-[url('/gridd.png')] bg-cover" />
  </div>

  {/* PANEL (FULL-WIDTH POSITIONING) */}
  <motion.div
    initial={{ opacity: 0, x: -250 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="
      absolute left-0
      max-w-6xl
      border border-white/20
      bg-black/40 backdrop-blur-md
      p-10
    "
  >
    <p className="text-[50px] text-gray-200 leading-relaxed tracking-tight">
   
        Everything you need on <span className="text-primary">one autonomous mothership. </span>
     
        MAVs ready to deploy with onboard computing, sensing and modular payloads for any mission.
     
    </p>
  </motion.div>

</section>
  );
}