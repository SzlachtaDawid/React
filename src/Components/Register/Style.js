import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
`;

export const Label = styled.label`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #edf2f4;
`;

export const H1 = styled.h1`
  font-size: 40px;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.253);
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: #edf2f4;
`;

export const Button = styled.button`
  padding: 5px;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.253);
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: #edf2f4;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0, 255, 42, 0.432);
  }
`;
