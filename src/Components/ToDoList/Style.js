import styled from "styled-components";

export const Background = styled.div`
  min-height: 600px;
  width: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 30px 17px rgba(0, 0, 0, 0.5);

  text-align: center;
  border-radius: 20px;
`;

export const H1 = styled.h1`
  font-size: 50px;
  margin: 15px;
`;

export const Input = styled.input`
  font-size: 25px;

  margin: 5px;
  border-radius: 7px;
  border: none;
`;

export const AddToDo = styled.button`
  font-size: 25px;

  color: white;
  background-color: transparent;
  box-shadow: 0px 0px 30px 17px rgba(0, 0, 0, 0.5);

  padding: 5px;
  margin: 5px 20px;
  border-radius: 7px;
  border: none;

  cursor: pointer;
`;

export const List = styled.ul`
  text-align: left;
  height: 100%;
  list-style: none;
`;

export const ToDoLi = styled.li`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 20px;
  margin: 15px auto;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p`
  margin-top: 5px;
  font-size: 12px;
`;
