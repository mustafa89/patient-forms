"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function GradientButton({ 
  children, 
  className, 
  gradientFrom = "from-blue-600", 
  gradientTo = "to-purple-600",
  hoverGradientFrom = "from-blue-700", 
  hoverGradientTo = "to-purple-700",
  size = "default",
  variant = "default",
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!e.currentTarget) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const variants = {
    default: `text-white bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:bg-gradient-to-r hover:${hoverGradientFrom} hover:${hoverGradientTo}`,
    outline: `text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground`,
    ghost: `text-foreground hover:bg-accent hover:text-accent-foreground`,
  };

  const sizes = {
    default: "h-10 px-6 py-2 text-sm",
    sm: "h-8 px-4 py-1 text-xs",
    lg: "h-12 px-8 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {variant === "default" && isHovering && (
        <span
          className="absolute rounded-full bg-white/10 pointer-events-none"
          style={{
            width: 100,
            height: 100,
            top: mousePosition.y - 50,
            left: mousePosition.x - 50,
            filter: "blur(20px)",
            transform: "translate(0, 0)",
            opacity: 0.4,
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
} 