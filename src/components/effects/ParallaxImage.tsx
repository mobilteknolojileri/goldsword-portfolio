"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

const ParallaxImage = ({ src, alt, className, speed = 0.5 }: ParallaxImageProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ParallaxImage;
