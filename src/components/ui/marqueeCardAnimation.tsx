"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setStart(true);
    }
  }, []);

  const getDirection = () => {
    return direction === "left" ? "forwards" : "reverse";
  };

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "10s";
      case "normal":
        return "20s";
      default:
        return "40s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
    >
      <ul
        className={cn(
          "flex shrink-0 gap-2 py-0 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: getSpeed(),
          animationDirection: getDirection(),
          animationName: "scroll",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {/* Render the original set of items */}
        {items.map((item, idx) => (
          <li
            className="w-[80px] h-[80px] max-w-full relative flex-shrink-0 flex items-center justify-center"
            key={idx}
          >
            <Image
              width={100}
              height={100}
              src={item.src}
              alt={item.alt}
              className="lg:h-16 h-10 w-10 lg:w-16 object-contain"
            />
          </li>
        ))}

        {/* Duplicate the set just once */}
        {items.map((item, idx) => (
          <li
            className="w-[80px] h-[80px] max-w-full relative flex-shrink-0 flex items-center justify-center"
            key={idx + items.length}
          >
            <Image
              width={100}
              height={100}
              src={item.src}
              alt={item.alt}
              className="lg:h-16 h-10 w-10 lg:w-16 object-contain"
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
