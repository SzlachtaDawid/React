import styled from "styled-components";
import ParticlesComp from "../GlobalStyle/ParticlesComp";
import { device } from "./MediaQueries";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  height: 100vh;

  text-align: center;
  z-index: 1;

  border: 1px solid white;
  border-radius: 2px;
  @media ${device.tablet} {
    height: 500px;
    min-width: 600px;
    border-radius: 10px;
  }
`;
export const ParticlesGround = styled(ParticlesComp)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  z-index: -1;
`;
export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: #edf2f4;
  background-image: linear-gradient(#2b1055, #7597de);
`;

export const Form = styled.form`
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Label = styled.label`
  color: #edf2f4;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 40px;
`;

export const H2 = styled.h1`
  font-size: 22px;
`;

export const Input = styled.input`
  font-size: 15px;

  border: none;
  border-radius: 10px;
  padding: 2px 10px;

  color: #edf2f4;
  background-color: rgba(255, 255, 255, 0.253);

  &:focus {
    background-color: rgba(0, 255, 42, 0.432);
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  font-size: 20px;

  width: 100px;
  border: none;
  border-radius: 10px;
  padding: 5px;

  color: #edf2f4;
  background-color: rgba(255, 255, 255, 0.253);

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 42, 0.432);
  }
`;

export const Option = styled.div`
  padding: 2px;
`;
