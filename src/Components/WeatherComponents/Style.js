import styled from "styled-components";
import { Link } from "react-router-dom";


export const ContainerApp = styled.div`
width: 40vw;
height: 60vh;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 60px;
text-align: center;
background-position: center;
`;

export const Form = styled.form`
margin: 10% 5px;
`;

export const ContainerCard = styled.div`
margin: 50px auto;
height: 50%;
width: 70%;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: rgba(0, 0, 0, 0.3);
padding: 10px;
border-radius: 50px;
`;

export const H1 = styled.h1`
font-size: 50px;
margin: 10px 5px;
`;

export const Input = styled.input`
  font-size: 25px;
  width: 70%;
  text-align: center;

  border: none;
  border-radius: 10px;
  padding: 2px 10px;

  color: #edf2f4;
  background-color: rgba(0, 0, 0, 0.3);;

  &:focus {
    background-color: rgba(0, 255, 42, 0.5);
    outline: none;
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
`;

export const Back = styled(Link)`
font-size: 22px;
position: absolute;
bottom: 5%;
left: 50%;
transform: translate(-50%,-50%);
color: white;
cursor: pointer;
`;
