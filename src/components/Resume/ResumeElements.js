import styled from "styled-components";

export const ResumeContainer = styled.div`
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    @media screen and (max-width: 768px){
        margin-top: 10vh;
    }
`
export const ResumeItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`
export const ResumeC1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-bottom: 3px solid red;
`
export const ResumeC2 = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ResumeH2 = styled.h2`
    padding: 0;
    margin: 0;
`
export const ResumeTitle = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 20px;
    text-align: left;
    width: 550px;
`
export const ResumeSubtitle = styled.p`
    text-align: left;
    width: 550px;
`
export const ResumeP = styled.p`
    padding: 0;
    margin: 0;
    text-align: left;
    width: 550px;
`

export const BarSkill = styled.div`
    height: 30px;
    width: 550px;
    background-color: hsl(0, 63%, 10%);
`
export const ResumeTitleSkill = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 20px;
    text-align: left;
    width: 550px;
    margin-top: 10px;
`