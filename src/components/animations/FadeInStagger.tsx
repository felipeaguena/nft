"use client";

import React, { createContext, useContext } from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { type FadeDirection } from "./FadeIn";

interface FadeInStaggerContextType {
  staggerDelay: number;
}

const FadeInStaggerContext = createContext<FadeInStaggerContextType>({
  staggerDelay: 0.08,
});

export interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  className = "",
  ...props
}: FadeInStaggerProps) {
  // Atribui automaticamente índice aos filhos diretos para cálculo do stagger relativo
  let itemIndex = 0;
  const renderedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const currentIndex = itemIndex++;
      const existingIndex = (child.props as { index?: number })?.index;
      return React.cloneElement(child as React.ReactElement<{ index?: number }>, {
        index: existingIndex !== undefined ? existingIndex : currentIndex,
      });
    }
    return child;
  });

  return (
    <FadeInStaggerContext.Provider value={{ staggerDelay }}>
      <div className={className} {...props}>
        {renderedChildren}
      </div>
    </FadeInStaggerContext.Provider>
  );
}

export interface FadeInStaggerItemProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  direction?: FadeDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  index?: number;
  scale?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
  className?: string;
}

export function FadeInStaggerItem({
  children,
  direction = "up",
  distance = 20,
  duration = 0.5,
  delay,
  index,
  scale = 1,
  once = false,
  amount = 0.1,
  margin = "0px 0px -40px 0px",
  className = "",
  ...props
}: FadeInStaggerItemProps) {
  const context = useContext(FadeInStaggerContext);
  const staggerDelay = context?.staggerDelay ?? 0.08;

  // No desktop com grid de até 4 colunas, o stagger ocorre por linha (0s, 0.08s, 0.16s, 0.24s)
  // No mobile, cada item aciona individualmente via seu próprio viewport ao entrar na tela
  const computedDelay =
    delay !== undefined
      ? delay
      : index !== undefined
      ? Math.min(index % 4, 3) * staggerDelay
      : 0;

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
        delay: computedDelay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
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

export default FadeInStagger;
