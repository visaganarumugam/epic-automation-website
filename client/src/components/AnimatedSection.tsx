import React from 'react';
import { useScrollAnimation, scrollAnimations } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: keyof typeof scrollAnimations | 'custom';
  customAnimation?: {
    y?: number;
    opacity?: number;
    scale?: number;
    rotation?: number;
    duration?: number;
    ease?: string;
    delay?: number;
    stagger?: number;
  };
  trigger?: string;
  start?: string;
  end?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  animation = 'fadeUp',
  customAnimation,
  trigger = "top 80%",
  start = "top 80%",
  end = "bottom 20%",
  as: Component = 'div'
}) => {
  const animationConfig = animation === 'custom' 
    ? customAnimation 
    : scrollAnimations[animation];

  const elementRef = useScrollAnimation({
    trigger,
    start,
    end,
    ...animationConfig
  });

  return (
    <Component
      ref={elementRef}
      className={className}
      id={id}
    >
      {children}
    </Component>
  );
};

// Convenience components for common animations
export const FadeUpSection: React.FC<Omit<AnimatedSectionProps, 'animation'> & { children: React.ReactNode }> = (props) => (
  <AnimatedSection {...props} animation="fadeUp" />
);

export const FadeInSection: React.FC<Omit<AnimatedSectionProps, 'animation'> & { children: React.ReactNode }> = (props) => (
  <AnimatedSection {...props} animation="fadeIn" />
);

export const ScaleUpSection: React.FC<Omit<AnimatedSectionProps, 'animation'> & { children: React.ReactNode }> = (props) => (
  <AnimatedSection {...props} animation="scaleUp" />
);

export const SlideLeftSection: React.FC<Omit<AnimatedSectionProps, 'animation'> & { children: React.ReactNode }> = (props) => (
  <AnimatedSection {...props} animation="slideLeft" />
);

export const SlideRightSection: React.FC<Omit<AnimatedSectionProps, 'animation'> & { children: React.ReactNode }> = (props) => (
  <AnimatedSection {...props} animation="slideRight" />
);
