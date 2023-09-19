import React from 'react';
import HeroArea from "../components/home/HeroArea";
import AboutComponent from "../components/home/AboutComponent";
import StepsComponent from "../components/home/StepsComponent";
import ContactComponent from "../components/home/ContactComponent";

function Home() {
    return (<>
            <HeroArea/>

            <AboutComponent/>

            <StepsComponent />

            <ContactComponent />

        </>
    )
}

export default Home;
