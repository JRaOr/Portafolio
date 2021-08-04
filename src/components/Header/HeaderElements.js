import styled from 'styled-components'

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
    padding:0;
    margin: 0;
    width: 150px;
    text-align: center;
    :hover{
        cursor: pointer;
    }
`
export const HeaderSmall = styled.div`
    display: none;
    height: 100px;
    width: 100%;
    @media screen and (max-width: 768px){     
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid white;
    }
`
export const HeaderH2 = styled.h2`
    color: white;
    padding: 0;
    margin: 0;
    margin-left: 20px;
`
export const HeaderMenu = styled.div`
    height: 50px;
    width: 50px;
    font-size: 50px;
    display: none;
    margin-right: 20px;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        display: block;
    }
`