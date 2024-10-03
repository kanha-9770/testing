"use client";

import KnowMoreCard from "./Common/KnowMoreCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import data from "../Constants/hero.json";

export default function KnowMore() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Ensure knowmoreData is not undefined
  const knowmoreData = data.find((item) => item.category === "knowmoresection")?.data?.knowmore;

  // If knowmoreData is undefined, return null to avoid rendering errors
  if (!knowmoreData) {
    return null;
  }

  return (
    <main ref={container} className="h-full cursor-pointer">
      {knowmoreData.map((project, i) => {
        const targetScale =
          i < knowmoreData.length - 1 ? 1 - (knowmoreData.length - i) * 0.1 : 1;
        return (
          <KnowMoreCard
            url={""}
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
