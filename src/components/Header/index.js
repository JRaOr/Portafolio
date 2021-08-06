import React, {useState, useEffect} from 'react'
import { HeaderContainer, HeaderData, HeaderItem, HeaderMenu, HeaderSmall, HeaderH2, HeaderFlag, NavLinks, LittleText} from './HeaderElements'
import {FaLanguage} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {RiGalleryFill} from 'react-icons/ri'
import mexico from '../../Image/mexico.svg'
import usa from '../../Image/usa.svg'
const Header = ({english, changelanguage}) => {
    const [scrollY, setScrollY] = useState(true);

    function logit() {
        if(parseInt(window.pageYOffset) < 80)
            setScrollY(true)
        else
            setScrollY(false)
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });
    const toggleLanguage = ()=>{
        if(english)
            changelanguage('spanish')
        else
            changelanguage('english')
    }
    return (
        <HeaderContainer origin={scrollY}>
            <HeaderData>
                <HeaderItem>
                    <NavLinks to='home'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Home':'Inicio'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='about'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'About':'Sobre mi'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='resume'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Career':'Carrera'}</NavLinks>
                </HeaderItem>
                {/* <HeaderItem>
                    <NavLinks to='works'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Works':'Proyectos'}</NavLinks>
                </HeaderItem> */}
                {/* <HeaderItem>
                    <NavLinks to='contact'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Contact':'Contacto'}</NavLinks>
                </HeaderItem> */}
                <HeaderItem>
                    <NavLinks to='gallery'smooth={true} duration={500} spy={true} exact='true' offset={-110}>{english?'Gallery':'Galería'}</NavLinks>
                </HeaderItem>
                <HeaderFlag english={english}>
                    <img onClick={()=>changelanguage('spanish')} src={mexico} className='flag-image'/>
                </HeaderFlag>
                <HeaderFlag english={!english}>
                    <img onClick={()=>changelanguage('english')} src={usa} className='flag-image'/>
                </HeaderFlag>
            </HeaderData>
            <HeaderSmall>
                <HeaderMenu>
                    <NavLinks to='home'smooth={true} duration={500} spy={true} exact='true' offset={-80}><AiOutlineHome/></NavLinks>
                </HeaderMenu>
                <HeaderMenu>
                    <NavLinks to='about'smooth={true} duration={500} spy={true} exact='true' offset={-80}><BsFillPersonLinesFill/></NavLinks>
                </HeaderMenu>
                <HeaderMenu>
                    <NavLinks to='resume'smooth={true} duration={500} spy={true} exact='true' offset={-80}><MdWork/></NavLinks>
                </HeaderMenu>
                <HeaderMenu>
                    <NavLinks to='gallery'smooth={true} duration={500} spy={true} exact='true' offset={-110}><RiGalleryFill/></NavLinks>
                </HeaderMenu>
                <HeaderMenu onClick={()=>toggleLanguage()}>
                    <FaLanguage/>
                </HeaderMenu>
            </HeaderSmall>
            
        </HeaderContainer>
    )
}

export default Header
