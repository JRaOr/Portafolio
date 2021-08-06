import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const HeaderContainer = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content: center;
    color: white;
    position: sticky;
    top: 0;
    z-index: 10;
    gap: 50px;
    background-color: ${({origin})=>(origin? 'transparent': '#121113')};
`
export const HeaderData = styled.div`
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    color: white;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const HeaderItem =  styled.h2`
    text-transform: uppercase;
    padding:0;
    margin: 0;
    width: 150px;
    text-align: center;
    :hover{
        cursor: pointer;
    }
`
export const HeaderFlag =  styled.div`
    padding:0;
    margin: 0;
    width: 40px;
    filter: grayscale(${({english})=>(english? '50': '0')});
    transition: all 0.5s ease-in-out;
    :hover{
        cursor: pointer;
    }
`

export const HeaderSmall = styled.div`
    display: none;
    height: 10vh;
    width: 100%;
    @media screen and (max-width: 768px){     
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
    }
`
export const HeaderH2 = styled.h2`
    color: white;
    padding: 0;
    margin: 0;
    margin-left: 20px;
`
export const HeaderMenu = styled.div`
    height: 80%;
    font-size: 50px;
    display: none;
    margin-right: 20px;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
`

export const LittleText = styled.div`
    font-size: 2vh;
`