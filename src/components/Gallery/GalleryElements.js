import styled from "styled-components";

export const GalleryContainer = styled.div`
    height: 90vh;
    padding: 0;
    position: relative;
`

export const GalleryList = styled.div`
    height: 90vh;
    width: 60vw;
    overflow: scroll;
    scrollbar-width: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
    transform: rotateZ(10deg)
`