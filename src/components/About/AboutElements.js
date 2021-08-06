import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const AboutContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content:center;
    align-items: center;
    position: relative;
    gap: 20px;
    z-index: 1;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const AboutBg = styled.img`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left: 0;
    width:100%;
    filter: blur(5px);
    @media screen and (max-width: 768px){
        height: 100vh;
    }
`

export const AboutPhoto = styled.img`
    height: 400px;
    border: 2px solid blanchedalmond;
    z-index:2;
    @media screen and (max-width: 768px){
        height: 300px;
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

export const DownButtons = styled.div`
    display: flex;
    gap: 20px;
`
export const SpanishButton = styled.button`
    height: 3vh;
    border: 2px solid white;
    border-radius: 5px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 2vh;
    background-color: transparent;
    color: white;

    :hover{
        cursor: pointer;
        box-shadow: rgba(40, 82, 67, 0.5) 0px 10px 20px, rgba(40, 82, 67, 0.5) 0px 6px 6px;
    }
`