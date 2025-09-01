import { useInView } from 'framer-motion';
import { useRef } from 'react';

export interface OptimizedAnimationConfig {
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotateX?: number;
  rotateY?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  margin?: string | number;
}

export const useOptimizedScrollAnimation = (config: OptimizedAnimationConfig = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: config.margin || "-10%",
  });

  const defaultConfig: Required<OptimizedAnimationConfig> = {
    y: config.y || 20,
    x: config.x || 0,
    opacity: config.opacity || 0,
    scale: config.scale || 1,
    rotateX: config.rotateX || 0,
    rotateY: config.rotateY || 0,
    duration: config.duration || 0.4,
    delay: config.delay || 0,
    ease: config.ease || "easeOut",
    margin: config.margin || "-10%",
  };

  const animationProps = {
    initial: {
      y: defaultConfig.y,
      x: defaultConfig.x,
      opacity: defaultConfig.opacity,
      scale: defaultConfig.scale,
      rotateX: defaultConfig.rotateX,
      rotateY: defaultConfig.rotateY,
    },
    animate: isInView ? {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    } : {
      y: defaultConfig.y,
      x: defaultConfig.x,
      opacity: defaultConfig.opacity,
      scale: defaultConfig.scale,
      rotateX: defaultConfig.rotateX,
      rotateY: defaultConfig.rotateY,
    },
    transition: {
      duration: defaultConfig.duration,
      delay: defaultConfig.delay,
      ease: defaultConfig.ease,
    },
  };

  return { ref, animationProps, isInView };
};

// Predefined animation configurations for common use cases
export const animationConfigs = {
  fadeUp: {
    y: 20,
    opacity: 0,
    duration: 0.4,
    delay: 0,
  },
  fadeUpDelayed: {
    y: 20,
    opacity: 0,
    duration: 0.4,
    delay: 0.1,
  },
  fadeIn: {
    opacity: 0,
    duration: 0.3,
    delay: 0,
  },
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    delay: 0,
  },
  slideInLeft: {
    x: -30,
    opacity: 0,
    duration: 0.4,
    delay: 0,
  },
  slideInRight: {
    x: 30,
    opacity: 0,
    duration: 0.4,
    delay: 0,
  },
  stagger: (index: number) => ({
    y: 20,
    opacity: 0,
    duration: 0.4,
    delay: index * 0.05,
  }),
};

