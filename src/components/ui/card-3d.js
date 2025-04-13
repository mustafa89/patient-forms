"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Card3D({
  children,
  className,
  tiltFactor = 5,
  perspective = 1000,
  transitionDuration = 200,
  resetOnLeave = true,
  glareOpacity = 0.25,
  glareColor = "rgba(255, 255, 255, 0.4)",
  backgroundGradient,
  disabled = false,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center in percentage (-1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply amplification to the movement on hover
    const amplifiedX = x * (isHovering ? 1.3 : 1);
    const amplifiedY = y * (isHovering ? 1.3 : 1);
    
    setPosition({ x: amplifiedX, y: amplifiedY });
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (resetOnLeave) {
      setPosition({ x: 0, y: 0 });
    }
    setIsHovering(false);
  };

  // Reset position on unmount or when component is disabled
  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      setIsHovering(false);
    }
  }, [disabled]);

  // Calculate the actual tilt factor - amplify on hover
  const actualTiltFactor = isHovering ? tiltFactor * 1.5 : tiltFactor;

  const style = {
    transform: `
      perspective(${perspective}px) 
      rotateX(${position.y * -actualTiltFactor}deg) 
      rotateY(${position.x * actualTiltFactor}deg)
      ${isHovering ? 'scale(1.02)' : 'scale(1)'}
    `,
    transition: isHovering ? 'none' : `all ${transitionDuration}ms ease-out`,
    transformStyle: 'preserve-3d',
    background: backgroundGradient,
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group transition-all duration-300 rounded-xl overflow-hidden", 
        isHovering ? "shadow-xl" : "shadow-md",
        className
      )}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Background hover effect */}
      <div 
        className={cn(
          "absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"
        )}
      />
      
      {/* Glare effect */}
      {isHovering && (
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(
              circle at ${50 + position.x * 40}% ${50 + position.y * 40}%,
              ${glareColor},
              transparent 70%
            )`,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(1px)', // Place glare above content
          }}
        />
      )}
    </div>
  );
} 