"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const letters = "ABCdyt+>!?JKWXYZabcde%LP}";

function scrambleText(finalText: string, progress: number) {
  return finalText
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < progress * finalText.length) return finalText[i];
      return letters[Math.floor(Math.random() * letters.length)];
    })
    .join("");
}

export default function ScrambleText({ text }: { text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!inView) return;

    let progress = 0;
    const duration = 800;
    const steps = 30;
    const interval = duration / steps;

    const timer = setInterval(() => {
      progress += 1 / steps;
      setDisplay(scrambleText(text, progress));

      if (progress >= 1) {
        setDisplay(text);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, text]);

  return (
    <p ref={ref} className="font-mono text-4xl tracking-tight text-white">
      {display}
    </p>
  );
}