export const titleAnimation = {
  initial: {
    y: "100%",
    opacity: 0.6,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.25, 0.74, 0.22, 0.99],
      staggerChildren: 0.3,
    },
  },
};
