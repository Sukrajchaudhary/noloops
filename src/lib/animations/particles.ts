import { loadSlim } from "tsparticles-slim";

// Particle initialization function for smaller circles with random movement
export const particlesInit = async (engine: unknown) => {
  await loadSlim(engine);
};

// Particle configuration for smaller circles with random movement
export const particlesConfig = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 120, // Reduced distance
      enable: true,
      opacity: 0.15, // Reduced opacity
      width: 0.8, // Thinner links
    },
    move: {
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.8, // Reduced speed for smoother movement
      straight: false,
      direction: "none",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 120, // More particles
    },
    opacity: {
      value: 0.25, // Reduced opacity
      random: true, // Random opacity
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    shape: {
      type: "circle", // Ensuring we use circles, not hexagons
    },
    size: {
      value: { min: 0.5, max: 2 }, // Smaller circles
      random: true, // Random sizes
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.3,
        sync: false
      }
    },
  },
  detectRetina: true,
};