import React, {useState} from 'react'
import Star from '../components/star'
import Header from '../components/Header'
import HomeLanding from '../components/HomeLanding'
import About from '../components/About'
import Resume from '../components/Resume'
import Gallery from '../components/Gallery'
const Home = () => {
    const [english, setEnglish] = useState(true)
    const changelanguage = (idioma)=>{
        console.log('Cambiando lenguaje a: ', idioma)
        if(idioma === 'spanish')
            setEnglish(false)
        else
            setEnglish(true)
    }
    return (
        // <div className='page-container'>
        //     <div className='home-container'>
        //         <Header english={english} changelanguage={changelanguage} />
        //         <HomeLanding english={english}/>
        //         <About english={english}/>
        //         <Resume english={english}/>
        //         <Gallery english={english}/>
        //     </div>
        // </div>
        <>
        <Header english={english} changelanguage={changelanguage} />
        <HomeLanding english={english}/>
        <About english={english}/>
        <Resume english={english}/>
        <Gallery english={english}/>
        </>
    )
}

export default Home