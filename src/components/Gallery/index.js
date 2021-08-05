import React, {useState} from 'react'
import { GalleryContainer, GalleryList, GalleryListItem, ImageContainer} from './GalleryElements'
import gallery0 from '../../Image/gallery/image0.jpg'
import gallery1 from '../../Image/gallery/image1.jpg'
import gallery2 from '../../Image/gallery/image2.jpg'
import gallery3 from '../../Image/gallery/image3.jpg'
import gallery4 from '../../Image/gallery/image4.jpg'
import gallery5 from '../../Image/gallery/image5.jpg'
import gallery6 from '../../Image/gallery/image6.jpg'
import gallery7 from '../../Image/gallery/image7.jpg'
import gallery8 from '../../Image/gallery/image8.jpg'
import gallery9 from '../../Image/gallery/image9.jpg'
import gallerya from '../../Image/gallery/imagea.jpg'
import galleryb from '../../Image/gallery/imageb.jpg'
import galleryc from '../../Image/gallery/imagec.jpg'
import galleryd from '../../Image/gallery/imaged.jpeg'
import gallerye from '../../Image/gallery/imagee.jpg'
import galleryf from '../../Image/gallery/imagef.jpeg'
import galleryg from '../../Image/gallery/imageg.jpg'
import galleryh from '../../Image/gallery/imageh.jpg'
import galleryi from '../../Image/gallery/imagei.jpeg'

const data =[
    {spanish: 'UNIVERSIDAD', ingles: 'OPTIC CLASS', image: gallery0},
    {spanish: 'UNIVERSIDAD', ingles: 'CIRCUIT', image: gallery1},
    {spanish: 'UNIVERSIDAD', ingles: 'TEAM', image: gallery2},
    {spanish: 'UNIVERSIDAD', ingles: 'RAINBOW', image: gallery3},
    {spanish: 'UNIVERSIDAD', ingles: 'TEAM WORK', image: gallery4},
    {spanish: 'UNIVERSIDAD', ingles: 'SUNSET', image: gallery5},
    {spanish: 'UNIVERSIDAD', ingles: 'UNIVERSITY', image: gallery6},
    {spanish: 'UNIVERSIDAD', ingles: 'FRIENDS', image: gallery7},
    {spanish: 'UNIVERSIDAD', ingles: 'LABORATORY', image: gallery8},
    {spanish: 'UNIVERSIDAD', ingles: 'IEEE', image: gallery9},
    {spanish: 'UNIVERSIDAD', ingles: 'FCA CHRYSLER', image: gallerya},
    {spanish: 'UNIVERSIDAD', ingles: 'FCA TEAM', image: galleryb},
    {spanish: 'UNIVERSIDAD', ingles: 'FCA FRIENDS', image: galleryc},
    {spanish: 'UNIVERSIDAD', ingles: 'UNIVERSITY', image: gallerye},
    {spanish: 'UNIVERSIDAD', ingles: 'UNIVERSITY', image: galleryf},
    {spanish: 'UNIVERSIDAD', ingles: 'UNIVERSITY', image: galleryg},
    {spanish: 'UNIVERSIDAD', ingles: 'UNIVERSITY', image: galleryi},

]

const Gallery = ({english}) => {
    const [imageSelected, setimageSelected] = useState(gallery1)
    const [classSelected, setClass] = useState(0) 
    return (
        <GalleryContainer id='gallery'>
            <GalleryList className='hide-scroll'>
                {
                    data.map((item, index)=>(
                        <GalleryListItem className={(classSelected === index ? 'selected-list':'')} onClick={()=>{setimageSelected(item.image); setClass(index)}}>
                            {(english? item.ingles: item.spanish)}
                        </GalleryListItem>  
                    ))
                }
            </GalleryList>
            <ImageContainer>
                <img src={imageSelected} className='image-gallery'/>
            </ImageContainer>
        </GalleryContainer>
    )
}
export default Gallery
