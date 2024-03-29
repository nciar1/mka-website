import React from 'react'
import HeroSection from '../components/HeroSection'
import { Info,InfoNoLink} from '../components/Info'
import {AboutMe,ContactMe,MyShop} from '../components/Info/Data'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <HeroSection/>
            <InfoNoLink {...AboutMe}/>
            <Portfolio/>
            <Services />
            <Info {...MyShop}/>
            <Info {...ContactMe}/>
        </>
    )
}
export default Home
