import { useRef } from 'react';
import gsap from 'gsap';

export const useGSAPAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  return ref;
};

// Animate elements on load
export const animateOnLoad = (
  elements: gsap.TweenTarget,
  duration = 0.8,
  delay = 0
) => {
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration,
    delay,
    ease: 'power2.out',
  });
};

// Stagger animation for multiple elements
export const staggerAnimateOnLoad = (
  elements: gsap.TweenTarget,
  duration = 0.8,
  staggerAmount = 0.1
) => {
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration,
    stagger: staggerAmount,
    ease: 'power2.out',
  });
};
