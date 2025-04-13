"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingElement({
  children,
  amplitude = 10,
  period = 5,
  delay = 0,
  className = "",
}) {
  const controls = useAnimationControls();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    
    hasStarted.current = true;
    
    const animate = async () => {
      // Wait for initial delay
      if (delay > 0) {
        await controls.start({ y: 0, transition: { duration: 0 } });
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
      }
      
      // Start the floating animation loop
      while (true) {
        await controls.start({
          y: amplitude,
          transition: {
            duration: period / 2,
            ease: "easeInOut"
          }
        });
        
        await controls.start({
          y: -amplitude,
          transition: {
            duration: period,
            ease: "easeInOut"
          }
        });
        
        await controls.start({
          y: 0,
          transition: {
            duration: period / 2,
            ease: "easeInOut"
          }
        });
      }
    };
    
    animate();
    
    return () => {
      controls.stop();
    };
  }, [amplitude, period, delay, controls]);

  return (
    <motion.div
      className={cn("relative transition-transform will-change-transform", className)}
      animate={controls}
      initial={{ y: 0 }}
      style={{ 
        willChange: "transform",
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </motion.div>
  );
} 