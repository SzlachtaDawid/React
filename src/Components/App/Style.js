import styled from "styled-components";
import Particles from "react-particles-js";
import SignUp from "../SignUp/SignUp";

export const Container = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
min-width: 600px;
height: 400px;

text-align: center;
z-index: 1;

border: 1px solid white;
border-radius: 10px;
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
`

export const SignUpComp = styled(SignUp)`
background-color: white;
width: 100%;
`

export const ParticlesGround = styled(Particles)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
width:100%;
height: 100%;

z-index: -1;
`