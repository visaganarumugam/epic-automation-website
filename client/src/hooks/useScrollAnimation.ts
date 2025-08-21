import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  duration?: number;
  ease?: string;
  y?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  stagger?: number;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  
  const {
    trigger = "top 80%",
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    markers = false,
    duration = 1,
    ease = "power2.out",
    y = 50,
    opacity = 0,
    scale = 1,
    rotation = 0,
    stagger = 0,
    delay = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      y: y,
      opacity: opacity,
      scale: scale,
      rotation: rotation
    });

    // Create the animation
    const animation = gsap.to(element, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: duration,
      ease: ease,
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
        toggleActions: "play none none reverse"
      }
    });

    // If stagger is specified, animate child elements
    if (stagger > 0) {
      const children = element.querySelectorAll('[data-animate-child]');
      if (children.length > 0) {
        gsap.fromTo(children, 
          {
            y: y,
            opacity: opacity,
            scale: scale,
            rotation: rotation
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: duration,
            ease: ease,
            stagger: stagger,
            scrollTrigger: {
              trigger: element,
              start: start,
              end: end,
              scrub: scrub,
              markers: markers,
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }

    // Cleanup function
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [trigger, start, end, scrub, markers, duration, ease, y, opacity, scale, rotation, stagger, delay]);

  return elementRef;
};

// Predefined animation variants
export const scrollAnimations = {
  fadeUp: {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  fadeIn: {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  },
  scaleUp: {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  },
  slideLeft: {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  slideRight: {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  rotateIn: {
    rotation: 180,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  }
};






