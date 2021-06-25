import { Container, ParticlesGround, RegisterComp } from "./Style";

function App() {
  return (
    <Container>
      <RegisterComp />
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
    </Container>
  );
}

export default App;
