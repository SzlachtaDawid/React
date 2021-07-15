import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = styled(FontAwesomeIcon)`
  font-size: 100px;
  color: #bdbdbd;

  position: absolute;
  left: 50%;
  bottom: 70%;
  transform: translate(-50%, -50%);

  cursor: pointer;

  &:hover {
    color: #1b921b;
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  color: white;

  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;
