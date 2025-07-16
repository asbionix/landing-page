import React from 'react'
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Grid from './components/BentoGrid/Grid';
import Features from './components/Features/Features';
import Info from './components/WhoAreWe/Info';
import Testimony from './components/Testimony/Testimony';
import FAQs from './components/FAQs/FAQ';

function Home() {
    return (
        <>
            <Hero />
            <Info />
            {/* <Stats /> */}
            <Features />
            <Grid />
            {/* <Testimony /> */}
            <FAQs />
        </>
    )
}

export default Home;