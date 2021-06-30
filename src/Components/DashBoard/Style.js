import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;

  width: 30%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;

  color: #edf2f4;
  background-color: rgba(255, 255, 255, 0.253);

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 42, 0.432);
  }
`;

export const DashboardContainer = styled.div`

min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

color: #edf2f4;
background-image: linear-gradient(#2b1055, #7597de);
`;

export const Section = styled.section`
position: relative;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;

export const Moon = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
pointer-events: none;

mix-blend-mode: screen;
`;

export const Stars = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
`;

export const Mountains = styled.img`
position: absolute;
top: initial;
bottom: 0;
left: 0;
width: 100%;
pointer-events: none;
z-index: 100;
`;

export const H1 = styled.h1`
/* position: absolute;

z-index: 100; */
`;
export const H2 = styled.h2`
/* position: absolute;

z-index: 100; */
`;

export const ContainerText = styled.div`

min-height: 30vh;
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1000;
`;