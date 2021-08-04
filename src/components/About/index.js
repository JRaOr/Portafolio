import React from 'react'
import { AboutBg, AboutContainer, AboutContent, AboutPhoto, AboutP, AboutH1, AboutButton} from './AboutElements'
import ice from '../../Image/green.jpg'
import profile from '../../Image/profile.jpg'
const About = () => {
    return (
        <AboutContainer>
            <AboutBg src={ice}/>
            <AboutPhoto src={profile}></AboutPhoto>

            <AboutContent>

                <AboutH1>
                    About Me
                </AboutH1>
                <AboutP>
                    Hello there! I'm Gerardo! I'm from Mexico. I'm Electronic Engineer by profession, we can say I'm almost new in web development, I had been working as Hardware Designer and Developer since my graduation from college. Now I've decided to expand my knowledge in the field of Web Development.
                    With my co-workers I've learned so much this last year, I've gone from generating data to desing complete applications with any kind of software and hardware. I'm really exicted of keep learning more of this great world.  
                </AboutP>
                <AboutH1>
                    Contact Details
                </AboutH1>
                <AboutP>
                    Gerardo Ramirez Ortega<br/>Country: Mexico<br/>Phone: +52 722 914 2918<br/>Email: gerardo.ramirez04@grupobimbo.com
                </AboutP>
                <AboutButton type='button'>Resume</AboutButton>
            </AboutContent>

        </AboutContainer>
    )
}

export default About
