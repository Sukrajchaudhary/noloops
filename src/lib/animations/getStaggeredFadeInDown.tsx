 const getStaggeredFadeInDown = (delay: number = 0) => ({
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      delay, 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  });

  export default  getStaggeredFadeInDown