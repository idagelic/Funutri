import { useState, useEffect } from 'react';
import Image from 'next/image';
import heroVideo from '../../public/assets/videos/hero.mp4';
import mobileHero from '../../public/assets/images/mobile-hero.png';

const menuItems = ['home', 'about us', 'contact', 'blog'];

const HomeHero = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <>
            <div className="home-hero">
                <video autoPlay muted>
                    <source src={heroVideo} type="video/mp4"></source>
                </video>
                <div className="home-hero-content">
                    <div className="home-hero-text">
                        the best investment you can ever make is in your own health
                    </div>
                    <div className="home-hero-button-container">
                            {/* <a href="/shop"> */}
                                <button className="button-full">
                                    <span> shop now </span>
                                </button>
                            {/* </a> */}
                    </div>
                </div>
            </div>
            <div className="home-hero-mobile">
                <div className="home-hero-image">
                    <img src={mobileHero}/>
                </div>
                <div className="home-hero-content">
                    <div className="home-hero-text">
                        the best investment you can ever make is in your own health
                    </div>
                    <div className="home-hero-button-container">
                            {/* <a href="/shop"> */}
                                <button className="button-full">
                                    <span> shop now </span>
                                </button>
                            {/* </a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHero;
