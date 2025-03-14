import styled from "styled-components";
import { Color } from "./Globalstyle";
import BackgrondIMG from "../Images/ImagemfundoTocar.png"

export const ContainerPage  = styled.div`
    background-image: url(${BackgrondIMG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%px;
    height: 1024px;
    display: flex;
    flex-direction: column;


`;

export const Logo = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10px;

`;

export const Img01 = styled.img`
    width: 200px;
    height: auto;
    border-radius: 10px;

`;