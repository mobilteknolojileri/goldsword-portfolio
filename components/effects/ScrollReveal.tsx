"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
