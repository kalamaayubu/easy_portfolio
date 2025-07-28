import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reusable scroll animation for fade+slide from left
export const fadeInFromLeft = (target, trigger) => {
  gsap.fromTo(
    target,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
};

// Reusable scroll animation for fade+slide from right
export const fadeInFromRight = (target, trigger) => {
  gsap.fromTo(
    target,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
};

// Fade and slide from bottom with no scroll trigger
export const fadeInUpNoScrollTrigger = (target) => {
    gsap.from(target, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        stagger: 0.3,
    })
}
// Fade and slide from bottom with no scroll trigger
export const fadeInUp = (target, trigger) => {
    gsap.from(target, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
            trigger,
            start: "top 60%",
            toggleActions: "play none play reverse",
        },
    })
}

// Add more as needed (e.g., fadeInUp, zoomIn, etc.)
