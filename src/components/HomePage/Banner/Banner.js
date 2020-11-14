import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Banner.css'
import Banner1 from '../../../assets/1.jpg'
import Banner2 from '../../../assets/2.jpg'
import Banner3 from '../../../assets/3.jpg'
import Banner4 from '../../../assets/4.jpg'

const Banner = () => {
    return (
        <div className="main-banner">
            <OwlCarousel
                className="owl-theme"
                items={1}
                loop
                margin={10}
                nav
                autoplay={true}
                autoplaySpeed={300}
            >
                <div className="item"><img width="300" src={Banner1} alt="banner" /></div>
                <div className="item"><img src={Banner2} alt="banner" /></div>
                <div className="item"><img src={Banner3} alt="banner" /></div>
                <div className="item"><img src={Banner4} alt="banner" /></div>
            </OwlCarousel>
        </div>
    )
}

export default Banner
