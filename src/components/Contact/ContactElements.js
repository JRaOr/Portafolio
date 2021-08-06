import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    overflow: hidden;
    position: relative;
`
export const ContactContent = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const ContactLeft = styled.div`
    height: 40vh;
    width: 40vh;
    border: 1px solid aquamarine;
`
export const ContactForm = styled.div`
    background-color: #090808;
    height: 60vh;
    width: 30vw;
    border: 1px solid pink;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: space-around;

`
export const ContactoH1 = styled.h1`

`

export const ContactInfo = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
`
export const ContactLabel = styled.div`
    width: 15vh;
    font-size: 2.5vh;
`
export const ContactInput = styled.input`
    flex-grow: 1;
    height: 3vh;
`
export const ContactMessage = styled.input`
    height: 10vh;
    flex-grow: 1;
`