import ScrambleText from "./ui/scramble";

import { useEffect, useState } from "react";

export default function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-black" />

        <div className="absolute w-[800px] h-[800px] bg-white/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-gray-400/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* SUBTEXT */}
      <div className="absolute bottom-10 left-6 max-w-none text-gray-800">
        {showText && (
          <>
            <ScrambleText text="Autonomous aerial computing." />
            <ScrambleText text="Optimizing intelligent warfare to protect our future." />
          </>
        )}
      </div>
    </div>
  );
}
