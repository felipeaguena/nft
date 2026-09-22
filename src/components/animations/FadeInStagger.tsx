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
  className?: string;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.15,
  className = "",
  ...props
}: FadeInStaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
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
      viewport={{ once, amount }}
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
  className?: string;
}

export function FadeInStaggerItem({
  children,
  direction = "up",
  distance = 24,
  duration = 0.55,
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
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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
