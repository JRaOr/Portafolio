import React, {useState, useEffect} from 'react'
import TypeWriter from "react-typewriter";
import { LandingContainer, LandingH1, LandingButton, LandingIcon, LandingSocial, LandingP, LandingQuote, QuoteButton} from './LandingElements';
import {AiOutlineFacebook, AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import {BsArrowDownShort} from 'react-icons/bs'
import axios from 'axios'
const Landing = () => {
    const [name, setname] = useState('Gerardo Ramirez')
    const [quote, setQuote] = useState(null)
    const [author, setauthor] = useState(null)
    useEffect(() => {
        axios.get('https://quotes.rest/qod?language=en').then(response=>{
            setQuote(response.data.contents.quotes[0].quote)
            setauthor(response.data.contents.quotes[0].author)
        }).catch(error=>{
            console.log(error)
        })
    }, [])
    const generateQuote = async()=>{
        console.log('Getting quote')
        axios.get('https://quotes.rest/quote/random?language=en&limit=1').then(response=>{
            console.log(response)
            setQuote(response.data.contents.quotes[0].quote)
            setauthor(response.data.contents.quotes[0].author)
        })
    }
    return (
        <LandingContainer>
            <LandingH1><TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter></LandingH1>
            <LandingQuote>
                <LandingP>{quote}</LandingP>
                <h3>{author}</h3>
                {/* <QuoteButton type='button' onClick={()=>generateQuote()}>Random quote</QuoteButton> */}
            </LandingQuote>
            <LandingSocial>
                <LandingIcon onClick={()=> window.open('https://www.facebook.com/gerardo.ramirezortega.5', "_blank")}>
                    <AiFillFacebook/>
                </LandingIcon>
                <LandingIcon onClick={()=> window.open('https://github.com/JRaOr', "_blank")}>
                    <AiFillGithub/>
                </LandingIcon>
                <LandingIcon onClick={()=> window.open('https://www.instagram.com/gerardo.raor', "_blank")}>
                    <AiOutlineInstagram/>
                </LandingIcon>
                <LandingIcon onClick={()=> window.open('https://www.linkedin.com/in/gerardo-ramirez-ortega-a2239b133/', "_blank")}>
                    <AiFillLinkedin/>
                </LandingIcon>
            </LandingSocial>
            <LandingButton>
                <BsArrowDownShort/>
            </LandingButton>
        </LandingContainer>
    )
}

export default Landing
