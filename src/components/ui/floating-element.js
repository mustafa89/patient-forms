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
  disabled = false
}) {
  const controls = useAnimationControls();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current || disabled) return;
    
    hasStarted.current = true;
    
    const animate = async () => {
      // Wait for initial delay
      if (delay > 0) {
        await controls.start({ y: 0, transition: { duration: 0 } });
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
      }
      
      // Start the floating animation loop - limit to fewer cycles to improve performance
      // Use simplified animation pattern
      await controls.start({
        y: [0, amplitude, -amplitude, 0],
        transition: {
          duration: period * 1.5,
          ease: "easeInOut",
          repeat: 2,
          repeatType: "loop"
        }
      });
    };
    
    animate();
    
    return () => {
      controls.stop();
    };
  }, [amplitude, period, delay, controls, disabled]);

  // If disabled, render without animation
  if (disabled) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("relative will-change-transform", className)}
      animate={controls}
      initial={{ y: 0 }}
      style={{ 
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
} 