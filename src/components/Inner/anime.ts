export const slide = (route: string) => {
  return {
    initial: {
      top: "100vh",

      // opacity: 0
    },
    enter: {
      top: "100vh",
    },
    exit:
      route !== "/"
        ? {
            top: "0",
            transition: {
              duration: 1,
              ease: [0.25, 0.74, 0.22, 0.99],
            },
          }
        : {
            top: "100vh",
            transition: {
              duration: 1,
              ease: [0.25, 0.74, 0.22, 0.99],
            },
          },
  };
};

export const perspactive = {
  initial: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  enter: {
    y: 0,
    scale: 1,
    onpacity: 1,
  },
  exit: {
    y: -500,
    scale: 0.9,
    opacity: 0.3,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.74, 0.22, 0.99],
    },
  },
};

export const background = {
  initial: {
    background: "#000",
  },
  enter: {
    background: "#000",
  },
  exit: {
    background: "#1e1e20",
  },
};
