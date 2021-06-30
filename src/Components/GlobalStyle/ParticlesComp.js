import Particles from "react-particles-js";
import styled from "styled-components";

export const ParticlesGround = styled(Particles)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  z-index: -1;
`;

const ParticlesComp = () => {
  return (
    <ParticlesGround
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.2,
          },
          move: {
            speed: 1,
          },
          size: {
            value: 0,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesComp;
