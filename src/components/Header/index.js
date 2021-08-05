import React from 'react'
import { HeaderContainer, HeaderData, HeaderItem, HeaderMenu, HeaderSmall, HeaderH2, HeaderFlag, NavLinks} from './HeaderElements'
import {FiMenu} from 'react-icons/fi'
import mexico from '../../Image/mexico.svg'
import usa from '../../Image/usa.svg'
const Header = ({english, changelanguage}) => {
    console.log(english)
    return (
        <HeaderContainer>
            <HeaderData>
                <HeaderItem>
                    <NavLinks to='home'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Home':'Inicio'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='about'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'About':'Sobre mi'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='resume'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Resume':'Carrera'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='works'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Works':'Proyectos'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='gallery'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Gallery':'Galería'}</NavLinks>
                </HeaderItem>
                <HeaderItem>
                    <NavLinks to='contact'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Contact':'Contacto'}</NavLinks>
                </HeaderItem>
                <HeaderFlag english={english}>
                    <img onClick={()=>changelanguage('spanish')} src={mexico} className='flag-image'/>
                </HeaderFlag>
                <HeaderFlag english={!english}>
                    <img onClick={()=>changelanguage('english')} src={usa} className='flag-image'/>
                </HeaderFlag>
            </HeaderData>
            <HeaderSmall>
                <HeaderH2>
                    Gerardo Ramirez
                </HeaderH2>
                <HeaderMenu>
                    <FiMenu/>
                </HeaderMenu>
            </HeaderSmall>
            
        </HeaderContainer>
    )
}

export default Header
