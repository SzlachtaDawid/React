import styled from "styled-components";
import Particles from "react-particles-js";

export const Container = styled.div`
max-width: 500px;
height: 100vh;
margin: 0 auto;
z-index: 1;
`

export const Background = styled(Particles)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
z-index: 2;
width:100%;
height: 100vh;
`