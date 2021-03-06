import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const LandingContainer = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    width: 100vw;
    top: -10vh;
`
export const LandingH1 = styled.div`
    font-size: 70px;
    @media screen and (max-width: 768px){
    font-size: 40px;
    }
`
export const LandingSocial = styled.div`
    margin-top: 20vh;
    max-width: 600px;
    display: flex;
    flex-direction: row;
    gap: 5px;
`
export const LandingP = styled.p`
    font-size: 20px;
`
export const LandingIcon = styled.div`
    height: 50px;
    font-size: 50px;
    color : white;
    :hover{
        cursor: pointer;
    }
`

export const LandingButton = styled.div`
    margin-top: 5vh;
    height: 50px;
    width: 50px;
    background-color: whitesmoke;
    font-size: 50px;
    color: black;
    border-radius: 25px;
    border: 2px solid transparent;
    :hover{
        background-color: transparent;
        border: 2px solid whitesmoke;
        color: whitesmoke;
        cursor: pointer;
    }
`

export const LandingQuote = styled.div`
    width: 400px;
    text-align: center;
`

export const QuoteButton = styled.button`
    height: 40px;
    background-color: transparent;
    border: none;
    color: white;
    :hover{
        cursor: pointer;
    }
`
export const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    :hover{
        color: whitesmoke;
    }
`