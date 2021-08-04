import React from 'react'
import Star from '../components/star'
import Header from '../components/Header'
import HomeLanding from '../components/HomeLanding'
import About from '../components/About'
import Resume from '../components/Resume'
const Home = () => {
    return (
        <div className='page-container'>
            <div className='home-container'>
                <Header/>
                <HomeLanding/>
                <About/>
                <Resume/>
            </div>
            <Star/>

        </div>
        
    )
}

export default Home