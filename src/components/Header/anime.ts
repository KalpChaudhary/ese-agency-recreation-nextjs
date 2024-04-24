export const textReveal = {
  initial: {
    y: "100%",
    opacity: 0.6,
  },
  enter: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.74, 0.22, 0.99],
      staggerChildren: 0.1,
    },
  },
};

export const logoReveal = {
  initial: {
    y: "100%",
    opacity: 0.6,
  },
  enter: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.74, 0.22, 0.99],
    },
  },
};

export const modelReveal = (isExpertiseHovered: boolean) => {
  //change height
  return {
    initial: {
      height: "0vh",
      // opacity: 0,
    },
    enter: isExpertiseHovered
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

export const NavItemHover = {
  y: "-50%",
  transition: {
    duration: 0.5,
    ease: [0.25, 0.74, 0.22, 0.99],
  },
};
