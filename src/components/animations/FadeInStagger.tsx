"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { type FadeDirection } from "./FadeIn";

export interface FadeInStaggerProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
  className?: string;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  once = false,
  amount = 0.1,
  margin,
  className = "",
  ...props
}: FadeInStaggerProps) {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
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

export interface FadeInStaggerItemProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  direction?: FadeDirection;
  distance?: number;
  duration?: number;
  scale?: number;
  className?: string;
}

export function FadeInStaggerItem({
  children,
  direction = "up",
  distance = 20,
  duration = 0.5,
  scale = 1,
  className = "",
  ...props
}: FadeInStaggerItemProps) {
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

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: scale !== 1 ? scale : 1,
      transition: {
        duration: 0.2,
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
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export default FadeInStagger;
