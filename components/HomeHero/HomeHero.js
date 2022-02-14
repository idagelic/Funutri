import { useState, useEffect } from 'react';
import Image from 'next/image';
import heroVideo from '../../public/assets/videos/hero.mp4';

const menuItems = ['home', 'about us', 'contact', 'blog'];

const HomeHero = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div class="home-hero">
            <video autoPlay muted>
                <source src={heroVideo} type="video/mp4"></source>
            </video>
            <div class="home-hero-content">
                <div class="home-hero-text">
                    the best investment you can ever make is in your own health
                </div>
                <div class="home-hero-button-container">
                        {/* <a href="/shop"> */}
                            <button class="button-full">
                                <span> shop now </span>
                            </button>
                        {/* </a> */}
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
