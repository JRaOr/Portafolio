import React from 'react'
import { AboutBg, AboutContainer, AboutContent, AboutPhoto, AboutP, AboutH1, AboutButton, NavLinks, DownButtons, SpanishButton} from './AboutElements'
import ice from '../../Image/green.jpg'
import profile from '../../Image/profile.jpg'
import spanishCV from '../../CV/cvspanish.pdf'
import englishCV from '../../CV/cvenglish.pdf'

const About = ({english}) => {
    return (
        <AboutContainer id='about'>
            <AboutBg src={ice}/>
            <AboutPhoto src={profile}></AboutPhoto>
            <AboutContent>
                <AboutH1>
                    {english ? 'About Me': 'Sobre mi'}
                </AboutH1>
                <AboutP>
                    {english? 'Hello there! I\'m Gerardo! I\'m from Mexico. I\'m Electronic Engineer by profession, we can say I\'m almost new in web development, I had been working as Hardware Designer and Developer since my graduation from college. Now I\'ve decided to expand my knowledge in the field of Web Development. With my co-workers I\'ve learned so much this last year, I\'ve gone from generating data to desing complete applications with any kind of software and hardware. I\'m really exicted of keep learning more of this great world.'
                    :'¡Hola! Mi nombre es Gerardo Ramírez, de nacionalidad Mexicana. Soy Ingeniero en Electrónica con especialidad en Automatización y Control, egresado del Instituto Tecnológico de Toluca. Desde hace algunos años he estado trabajando como Diseñador de Hardware y aplicaciones Embebidas, principalmente con microcontroladores y microcomputadoras. A la vez, me he estado desarrollando en el área de Software, principalmente en el Desarrollo Web, logrando llevar mi nivel de programación a un punto muy alto en mi carrera. Sí deseas conocer más sobre mi, con gusto te mostraré.'}
                </AboutP>
                <AboutH1>
                    {english? 'Contact Details': 'Detalles de Contacto'}
                </AboutH1>
                <AboutP>
                    Gerardo Ramirez Ortega<br/>{english?'Country: Mexico': 'País: México'}<br/>{english?'Phone: ': 'Teléfono: '}+52 722 914 2918<br/>{english?'Work Email: ': 'Correo del trabajo: '}gerardo.ramirez04@grupobimbo.com<br/>{english?'Personal Email: ': 'Correo personal: '}gerardo.ra.ort@gmail.com
                </AboutP>
                <DownButtons>
                    {/* <SpanishButton><a className='link-a' href={spanishCV} download="GerardoCV-Spanish.pdf">{english ? 'Download Spanish CV': 'Descargar CV Español'}</a></SpanishButton> */}
                    <SpanishButton><a className='link-a' href={englishCV} download="GerardoCV-English.pdf">{english ? 'Download English CV': 'Descargar CV Inglés'}</a></SpanishButton>
                </DownButtons>
                {/* <NavLinks to='resume'smooth={true} duration={500} spy={true} exact='true' offset={-80}>{english?'Resume': 'Carrera'}</NavLinks> */}
            </AboutContent>

        </AboutContainer>
    )
}

export default About
