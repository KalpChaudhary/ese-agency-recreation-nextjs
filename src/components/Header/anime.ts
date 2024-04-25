export const textReveal = {
  initial: {
    y: "100%",
    opacity: 0.6,
  },
  enter: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.74, 0.22, 0.99],
      staggerChildren: 0.1,
    },
  },
};

export const logoReveal = {
  initial: {
    top: 100,
    opacity: 0.6,
  },
  enter: {
    top: 0,
    opacity: 1,
    transition: {
      duration: 3,
      ease: [0.25, 0.74, 0.22, 0.99],
    },
  },
};


export const NavItemHover = {
  y: "-50%",
  transition: {
    duration: 0.5,
    ease: [0.25, 0.74, 0.22, 0.99],
  },
};
