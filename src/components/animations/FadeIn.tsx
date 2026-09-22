"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";

export type FadeDirection = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  direction?: FadeDirection;
  duration?: number;
  delay?: number;
  distance?: number;
  scale?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  duration = 0.55,
  delay = 0,
  distance = 20,
  scale = 1,
  once = false,
  amount = 0.12,
  margin,
  className = "",
  ...props
}: FadeInProps) {
  const getInitialOffsets = (): { x: number; y: number } => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const { x, y } = getInitialOffsets();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: scale !== 1 ? scale : 1,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
