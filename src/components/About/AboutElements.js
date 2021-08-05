import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const AboutContainer = styled.div`
    height: 90vh;
    overflow: hidden;
    display: flex;
    justify-content:center;
    align-items: center;
    position: relative;
    gap: 20px;
    z-index: 1;
`

export const AboutBg = styled.img`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left: 0;
    height: 100%;
    width:100%;
    filter: blur(5px);
`

export const AboutPhoto = styled.img`
    height: 400px;
    width: 300px;
    border: 2px solid blanchedalmond;
    z-index:2;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const AboutContent = styled.div`
    max-height: 80%;
    max-width: 700px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const AboutH1 = styled.h1`
    padding-left: 20px;
`
export const AboutP = styled.p`
    font-size: 20px;
    text-align: justify;
    padding: 20px;
`
export const AboutButton = styled.button`
    height: 40px;
    width: 150px;
    color: white;
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid white;
    font-size: 20px;
    :hover{
        cursor: pointer;
    }
`
export const NavLinks = styled(LinkS)`
    color: whitesmoke;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    border: 2px solid white;
    padding: 5px;
    border-radius: 5px;
    :hover{
        color: whitesmoke;
    }
`