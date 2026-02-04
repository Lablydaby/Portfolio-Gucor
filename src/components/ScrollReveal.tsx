import React from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  /** Class name for the motion wrapper */
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** How much of the element must be in view (0-1). Default 0.15 */
  amount?: number;
  /** Run animation only once */
  once?: boolean;
  /** Custom variants; overrides delay when using defaultVariants */
  variants?: typeof defaultVariants;
  /** Render as this HTML element or motion component */
  as?: keyof typeof motion;
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.15,
  once = true,
  variants,
  as: Component = 'div',
}: ScrollRevealProps) {
  const MotionComp = motion[Component] as typeof motion.div;
  const resolvedVariants = variants ?? {
    ...defaultVariants,
    visible: {
      ...defaultVariants.visible,
      transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <MotionComp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount, once }}
      variants={resolvedVariants}
    >
      {children}
    </MotionComp>
  );
}
