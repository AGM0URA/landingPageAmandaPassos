import styled from "styled-components";
import { Color } from "./Globalstyle";
import BackgrondIMG from "../Images/ImagemfundoTocar.png";

export const ContainerPage  = styled.div`
    background-image: url(${BackgrondIMG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: -8px 0px -8px -8px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.87); 
        pointer-events: none; 
        z-index: 1; 
    };
`;

export const Logo = styled.img`
    width: 500px;
    height: 260px;
    margin-top: 80px;
    margin-left: 151px;
    border-radius: 10px;
    position: relative;
    z-index: 2;

`;

export const Img01 = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10px;

`;

export const DivImg = styled.div`
    width:  545.34px;
    height: 638px;
    background-color: #131312;
    border: 10px solid #D0AF00;
    border-radius: 10px;
    border-radius: 50px;
    margin-left:950px;
    z-index: 2;
`;