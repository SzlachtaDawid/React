import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../GlobalStyle/MediaQueries";

// WeatherApp
export const ContainerBackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(85%);
`;

export const ContainerApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  border-radius: 60px;
  text-align: center;
`;

export const Back = styled(Link)`
  font-size: 22px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 35px;
  }
  @media ${device.laptop} {
    font-size: 40px;
  }
`;

// Weather

export const ContainerCard = styled.div`
  margin: 50px auto;
  font-size: 20px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 50px;

  @media ${device.tablet} {
    width: 550px;
    font-size: 30px;
  }
  @media ${device.laptop} {
    width: 750px;
  }
`;

export const H1 = styled.h1`
  font-size: 35px;
  margin: 15px 5px;
  @media ${device.tablet} {
    font-size: 65px;
  }
  @media ${device.laptop} {
    font-size: 70px;
  }
`;

export const Data = styled.div`
  margin: 10px auto;
`;

export const P = styled.p`
  margin: 10px 5px;
`;

// Form

export const Form = styled.form`
  margin: 10% 5px;
`;

export const Input = styled.input`
  font-size: 25px;
  width: 250px;
  text-align: center;

  border: none;
  border-radius: 10px;
  padding: 2px 10px;

  color: #edf2f4;
  background-color: rgba(0, 0, 0, 0.3);

  &:focus {
    background-color: rgba(0, 255, 42, 0.5);
    outline: none;
  }

  @media ${device.tablet} {
    font-size: 35px;
    width: 400px;
  }
  @media ${device.laptop} {
    font-size: 40px;
    width: 500px;
  }
`;

export const Button = styled.button`
  font-size: 17px;
  display: block;

  width: 100px;
  border: none;
  border-radius: 10px;
  padding: 3px;
  margin: 10px auto;

  color: #edf2f4;
  background-color: rgba(0, 0, 0, 0.3);

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 42, 0.5);
  }

  @media ${device.tablet} {
    font-size: 25px;
    width: 200px;
  }
  @media ${device.laptop} {
    width: 250px;
  }
`;
