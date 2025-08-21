import React from 'react';
import { useScrollAnimation, scrollAnimations } from '../hooks/useScrollAnimation';

type AsElement = keyof React.JSX.IntrinsicElements | React.ComponentType<any>;

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
  as?: AsElement;
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
  as = 'div'
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

  const Component = (as || 'div') as AsElement;

  return (
    <Component ref={elementRef} className={className} id={id}>
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
