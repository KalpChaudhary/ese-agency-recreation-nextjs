export const animateTransform = (i: number) => {
  return {
    initial: {
      translateY: "100%",
    },
    inView: {
      translateY: "0%",

      transition: {
        ease: [0.79, 0.14, 0.15, 0.86],
        duration: 1,
      },
    },
  };
};
