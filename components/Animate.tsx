"use client";

import { motion, useReducedMotion } from "framer-motion";

type Variant = "fadeUp" | "fadeDown" | "slideLeft" | "slideRight" | "scaleUp" | "fade";

type MotionValues = Record<string, number | string>;

interface AnimateProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

const variants: Record<Variant, { hidden: MotionValues; show: MotionValues }> = {
  fadeUp:    { hidden: { opacity: 0, y: 48  }, show: { opacity: 1, y: 0    } },
  fadeDown:  { hidden: { opacity: 0, y: -32 }, show: { opacity: 1, y: 0    } },
  slideLeft: { hidden: { opacity: 0, x: 60  }, show: { opacity: 1, x: 0    } },
  slideRight:{ hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0    } },
  scaleUp:   { hidden: { opacity: 0, scale: 0.88 }, show: { opacity: 1, scale: 1 } },
  fade:      { hidden: { opacity: 0         }, show: { opacity: 1           } },
};

export default function Animate({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.65,
  className = "",
  once = true,
  amount = 0.15,
}: AnimateProps) {
  const shouldReduce = useReducedMotion();
  const v = variants[variant];

  return (
    <motion.div
      initial={shouldReduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: v.hidden,
        show: {
          ...v.show,
          transition: { delay, duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
