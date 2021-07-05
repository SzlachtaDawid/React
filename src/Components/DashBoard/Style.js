import styled from "styled-components";
import { animated } from "react-spring";

export const DashboardContainer = styled.div`
  min-height: 100vh;

  color: #edf2f4;
  background-image: linear-gradient(#2b1055, #7597de);
`;

export const Section = styled(animated.section)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Stars = styled(animated.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Moon = styled(animated.img)`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;

  mix-blend-mode: screen;

  @media (max-width: 1200px) {
    top: -3%;
  }
`;
export const Sun = styled(animated.img)`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;

  mix-blend-mode: screen;

  @media (max-width: 1200px) {
    top: -3%;
  }
`;

export const Mountains = styled(animated.img)`
  position: absolute;
  top: initial;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 100;
  filter: brightness(150%);
`;
export const ContainerApp = styled(animated.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  width: 50%;

  z-index: 1000;
`;

export const Img = styled(animated.img)`
  width: 150px;
  height: 150px;
  transition: 0.3s;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 10px 25px rgba(255, 255, 255, 0.4);
  filter: invert(100%);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 10px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const ContainerText = styled(animated.div)`
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5px;
  z-index: 1000;
`;

export const H2 = styled(animated.h2)`
  font-size: 20px;
  z-index: 1000;
`;

export const Button = styled(animated.button)`
  font-size: 20px;

  width: 200px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;

  color: #edf2f4;
  background-color: rgba(255, 255, 255, 0.253);

  transition: 0.3s;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: rgba(255, 0, 0, 0.532);
  }
`;

export const P = styled(animated.p)`
  text-align: center;
  width: 120px;
  font-size: 10px;
  z-index: 1000;
  position: absolute;
  bottom: 0;
  left: 0;
`;
