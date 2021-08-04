import React from 'react'
import { HeaderContainer, HeaderData, HeaderItem, HeaderMenu, HeaderSmall, HeaderH2} from './HeaderElements'
import {FiMenu} from 'react-icons/fi'
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderData>
                <HeaderItem>
                    Home
                </HeaderItem>
                <HeaderItem>
                    About
                </HeaderItem>
                <HeaderItem>
                    Resume
                </HeaderItem>
                <HeaderItem>
                    Works
                </HeaderItem>
                <HeaderItem>
                    Gallery
                </HeaderItem>
                <HeaderItem>
                    Contact
                </HeaderItem>
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
