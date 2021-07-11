import styled from "styled-components";

export const Background = styled.div`
  min-height: 600px;
  width: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #000000;
  background: rgb(230, 230, 230);
  background: linear-gradient(180deg, #afafaf 0%, #ffffff 50%, #ffffff 100%);
  box-shadow: 10px 10px 30px 17px rgba(0, 0, 0, 0.5);

  text-align: center;
  border-radius: 20px;
`;

export const H1 = styled.h1`
  font-size: 50px;
  margin: 15px;
  letter-spacing: 5px;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px;

  margin: 10px 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const AddToDo = styled.button`
  font-size: 20px;

  color: #000000;
  background-color: white;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.5);

  padding: 5px;
  margin: 10px 20px;
  border-radius: 5px;
  border: none;

  cursor: pointer;
`;

export const List = styled.ul`
  text-align: left;
  max-height: 410px;
  list-style: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #929292;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #7e7e7e;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px 0px #f0f0f0;
  }
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
  font-size: 10px;
`;

export const ToDoP = styled.p`
  font-size: 20px;
`;

export const Progress = styled.button`
  font-size: 15px;
  width: 60px;

  color: #000000;
  background-color: white;

  padding: 5px;
  border: none;
  border-right: 1px solid #949494;

  cursor: pointer;
`;
export const Delete = styled.button`
  font-size: 15px;
  width: 30px;

  color: black;
  background-color: white;

  padding: 5px;
  border: none;

  cursor: pointer;
`;

export const User = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
`;
