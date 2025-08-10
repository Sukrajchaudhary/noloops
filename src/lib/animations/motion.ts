// // Framer motion animation variants

// // Fade in animation
// export const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   transition: { duration: 0.8 }
// };

// // Fade in with Y offset
// export const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8 }
// };

// // Fade in with Y offset (top to bottom)
// export const fadeInDown = {
//   initial: { opacity: 0, y: -10 },
//   animate: { opacity: 1, y: 0 },
//   transition: { delay: 0.2, duration: 0.5 }
// };

// // Button hover animation
// export const buttonHover = {
//   whileHover: { scale: 1.05 },
//   whileTap: { scale: 0.95 }
// };

// // Arrow animation
// export const arrowAnimation = {
//   animate: { y: [0, -5, 0] },
//   transition: { repeat: Infinity, duration: 1.5 }
// };

// // Staggered animations with custom delays
// export const getStaggeredFadeIn = (delay: number = 0) => ({
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   transition: { delay, duration: 0.8 }
// });

// export const getStaggeredFadeInUp = (delay: number = 0) => ({
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { delay, duration: 0.5 }
// });

// // Slider animation
// export const sliderAnimation = {
//   initial: { x: -100, opacity: 0 },
//   animate: { x: 0, opacity: 1 },
//   exit: { x: 100, opacity: 0 },
//   transition: { type: "spring", stiffness: 100, damping: 15 }
// };

// // Continuous slider animation
// export const continuousSlider = {
//   initial: { x: 0 },
//   animate: {
//     x: ["-25%", "-50%", "-75%", "-100%"],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 40,
//         ease: "linear"
//       }
//     }
//   }
// };

// // Continuous bounce animation
// export const continuousBounce = {
//   animate: {
//     y: ["-10px", "10px"],
//     transition: {
//       y: {
//         repeat: Infinity,
//         repeatType: "reverse",
//         duration: 1.5,
//         ease: "easeInOut"
//       }
//     }
//   }
// };

// // Directional animations for cards
// export const fadeInLeft = {
//   initial: { opacity: 0, x: -50 },
//   animate: { opacity: 1, x: 0 },
//   transition: { 
//     type: "tween", 
//     duration: 0.7, 
//     ease: "easeOut"
//   }
// };

// export const fadeInRight = {
//   initial: { opacity: 0, x: 50 },
//   animate: { opacity: 1, x: 0 },
//   transition: { 
//     type: "tween", 
//     duration: 0.7, 
//     ease: "easeOut"
//   }
// };

// export const fadeInBottom = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0 },
//   transition: { 
//     type: "tween", 
//     duration: 0.7, 
//     ease: "easeOut"
//   }
// };

// // Get directional animations with custom delay
// export const getDirectionalAnimation = (direction: 'left' | 'right' | 'bottom', delay: number = 0) => {
//   const baseAnimation = 
//     direction === 'left' ? fadeInLeft :
//     direction === 'right' ? fadeInRight : fadeInBottom;
    
//   return {
//     ...baseAnimation,
//     transition: {
//       ...baseAnimation.transition,
//       delay,
//       // Ensure smooth animation with proper easing
//       ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier curve for smoother motion
//     }
//   };
// };

// // Staggered children animation for parent containers
// export const staggerContainer = (staggerChildren: number = 0.08, delayChildren: number = 0) => ({
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//       ease: "easeOut",
//       staggerDirection: 1
//     }
//   }
// });

// // Scale in animation with custom delay
// export const getScaleIn = (delay: number = 0) => ({
//   initial: { opacity: 0, scale: 0.9 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { 
//     delay, 
//     duration: 0.6, 
//     ease: [0.175, 0.885, 0.32, 1.275] // Custom cubic-bezier for smoother scale
//   }
// });


// Framer motion animation variants - Optimized for smooth performance

// Fade in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Fade in with Y offset
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Fade in with Y offset (top to bottom)
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    delay: 0.1, 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Button hover animation - optimized for performance
export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  whileTap: { 
    scale: 0.98,
    transition: { 
      duration: 0.1, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Smooth arrow animation
export const arrowAnimation = {
  animate: { 
    y: [0, -8, 0]
  },
  transition: { 
    repeat: Infinity, 
    duration: 2,
    ease: "easeInOut"
  }
};

// Staggered animations with custom delays
export const getStaggeredFadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    delay, 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

export const getStaggeredFadeInUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    delay, 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

// Slider animation - optimized to prevent glitches
export const sliderAnimation = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
  transition: { 
    type: "tween", 
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Smooth continuous slider animation
export const continuousSlider = {
  initial: { x: "0%" },
  animate: {
    x: ["-25%", "-50%", "-75%", "-100%", "-125%", "-150%", "-175%", "-200%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 60, // Slower for smoother animation
        ease: "linear"
      }
    }
  }
};

// Smooth continuous bounce animation
export const continuousBounce = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
};

// Directional animations for cards - optimized
export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

export const fadeInBottom = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Get directional animations with custom delay - improved
export const getDirectionalAnimation = (direction: 'left' | 'right' | 'bottom', delay: number = 0) => {
  const animations = {
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    bottom: { opacity: 0, y: 40 }
  };
    
  return {
    initial: animations[direction],
    animate: { opacity: 1, x: 0, y: 0 },
    transition: {
      delay,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  };
};

// Staggered children animation - optimized for performance
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
});

// Scale in animation with custom delay - smooth scaling
export const getScaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    delay, 
    duration: 0.6, 
    ease: [0.25, 0.1, 0.25, 1.0]
  }
});

// New smooth animations to prevent glitches

// Smooth text reveal animation
export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Smooth card hover animation
export const cardHover = {
  whileHover: { 
    y: -5,
    scale: 1.02,
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  transition: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1.0]
  }
};

// Smooth rotation animation
export const smoothRotate = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity
    }
  }
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Smooth pulse animation
export const smoothPulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};