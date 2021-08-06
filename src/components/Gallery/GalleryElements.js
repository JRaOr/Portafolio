import styled from "styled-components";

export const GalleryContainer = styled.div`
    height: 90vh;
    padding: 0;
    position: relative;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vh;
    }
`

export const GalleryList = styled.div`
    height: 90vh;
    width: 60vw;
    overflow: scroll;
    scrollbar-width: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    @media screen and (max-width: 768px){
        height: 50vh;
        width: auto;
        display: grid;
        grid-template-columns: repeat(2, 40vw);
    }
`

export const GalleryListItem = styled.div`
    padding-left: 50px;
    height: 100px;
    width: auto;
    font-size: 100px;
    transition: all 0.2s ease-in-out;
    :hover{
        cursor: pointer;
        color: rgb(136, 69, 136);
        margin-left: 50px;
    }
    @media screen and (max-width: 768px){
        padding-left: 10px;
        height: 30px;
        font-size: 30px;
    }
`
export const ImageContainer = styled.div`
    position: absolute;
    height: 60vh;
    width: 50vw;
    background-color: whitesmoke;
    right: 5vh;
    top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: rotateZ(10deg);
    @media screen and (max-width: 768px){
        position: relative;
        height: auto;
        width: 80vw;
        right: 0vh;
        top: 0vh;
        transform: rotateZ(0deg);

    }
`