export const modelReveal = (isModelHovered: boolean) => {
  //change height
  return {
    initial: {
      height: "0vh",
      // opacity: 0,
    },
    enter: isModelHovered
      ? {
          height: "50vh",
          // opacity: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.74, 0.22, 0.99],
          },
        }
      : {
          height: "0vh",
          // opacity: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.74, 0.22, 0.99],
          },
        },
  };
};

export const contentReveal = (isModelHovered: boolean) => {
  return {
    initial: {
      y: "20%",
      opacity: 0,
      marginBottom: "1vw",
    },
    enter: isModelHovered
      ? {
          y: "0",
          opacity: 1,
          marginBottom: "-0.5vw",

          transition: {
            duration: 1,
            ease: [0.25, 0.74, 0.22, 0.99],
            staggerChildren: 0.1,
          },
        }
      : {
          y: "20%",
          opacity: 0,
          marginBottom: "1vw",
          lineHeight: "2",
          transition: {
            duration: 0.3,
            ease: [0.25, 0.74, 0.22, 0.99],
          },
        },
  };
};

export const modelOpacity = (isModelHovered: boolean) => {
  return {
    initial: {
      opacity: 0,
    },
    enter: isModelHovered
      ? {
          opacity: 0.7,
          transition: {
            duration: 1.5,
            ease: [0.25, 0.74, 0.22, 0.99],
          },
        }
      : {
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.74, 0.22, 0.99],
          },
        },
  };
};
