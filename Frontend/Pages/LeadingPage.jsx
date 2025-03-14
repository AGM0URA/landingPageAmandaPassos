import React from "react";
import {
    ContainerPage,
    Logo,
    Img01

} from "../Styles/LeadingPage.js";
import LogoImg from "../Images/logo1.png"

const LeadingPage = () => {
    return(
        <>
        <ContainerPage>
            <Logo src={LogoImg} alt="Logo" />
        </ContainerPage>
        </>
    );
};

export default LeadingPage;