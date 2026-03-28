"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Scene from "./3dscene";
import ScrambleText from "./scramble";

const sections = [
  {
    title: "Unmatched Cost per Effect",
    desc: "Each MAV deployed from the mothership costs a fraction of traditional systems, enabling large-scale, cost effective operations.",
  },
  {
    title: "Stealth Focused Design",
    desc: "Each MAV is also significantly more difficult to target using traditional kinetic methods due to their small size compared to larger FPV drones.",
  },
  {
    title: "Increased MAV Range and Endurance",
    desc: "The mothership serves as a mobile base station, extending the operational range of MAVs beyond their standalone capabilities.",
  },
  {
    title: "Autonomous Leader-Follower Operations",
    desc: "With fully onboard computing and sensing capabilities, the mothership can deploy MAVs autonomously, enabling complex coordinated missions without a need for skilled operators",
  },
];

export default function Sticky3DSection() {
  const ref = useRef(null);
  const [scroll, setScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // 🔥 KEY FIX: subscribe to motion value
  useEffect(() => {
    const unsubscribe = smoothScroll.on("change", (v) => {
      setScroll(v);
    });

    return () => unsubscribe();
  }, [smoothScroll]);

  return (
    <section ref={ref} className="relative h-[250vh] bg-black text-white">
      <div className="flex max-w-[1400px] mx-auto px-12">
        
        {/* LEFT: STICKY 3D */}
        <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
          <div className="w-full h-[400px]">
            <Scene scroll={scroll} />
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="w-1/2 py-40 space-y-40">
          {sections.map((item, i) => (
            <div key={i}>
              <h2 className="text-3xl mb-4">
                <ScrambleText text={item.title} />
              </h2>
              <p className="text-gray-400 max-w-md">
                {item.desc}
              </p>    
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}