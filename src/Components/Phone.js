import React from 'react';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Option from './Option/Option';
import Slider from './Slider/Slider';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';

const Phone = () => {
    return (
        <div>
            <Banner/>
            <Feature />
            <Option /> 
            <Slider />
            <Faq />
            <Footer />
        </div>
    )
}

export default Phone;