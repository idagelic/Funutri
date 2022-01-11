import { useState, useEffect } from 'react';
import Image from 'next/image';

import LogoImg from '@/assets/logo.png';
import HeroImg from '@/assets/hero.png';
import NavBar from '@/components/navbar';
import BurgerNavigation from '@/components/burgerNavigation';

const hamburgerWidth = 45;
const hamburgerHeight = hamburgerWidth / (35 / 50);

const magnifierWidth = 26;
const magnifierHeight = magnifierWidth / (26 / 25);

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (isClicked) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    }, [isClicked]);

    return (
        <header className="px-5 py-5 relative flex items-center bg-hci-header sm:bg-transparent sm:h-80">
            <Image
                className="hidden sm:block z--1"
                src={HeroImg}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                alt="Hero image"
            />

            <main className="max-w-4xl mx-auto flex-grow flex flex-col">
                <div className="z-10 flex justify-between items-center sm:mb-16">
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={50}
                        height={50}
                        alt="Design logo"
                    />
                    <div className="flex items-center sm:hidden">
                        <BurgerNavigation isOpen={isClicked} />
                        <Image
                            className="cursor-pointer z-0"
                            src={'/magnifier.svg'}
                            layout="fixed"
                            width={magnifierWidth}
                            height={magnifierHeight}
                            alt="Menu"
                        />
                        <div className="w-8" />
                        <Image
                            onClick={() => setIsClicked(!isClicked)}
                            className={`transform scale-75 cursor-pointer z-50 transition-all ease-linear duration-500 ${
                                isClicked ? 'transform rotate-90' : ''
                            }`}
                            src={'/hamburger.svg'}
                            layout="fixed"
                            width={hamburgerWidth}
                            height={hamburgerHeight}
                            alt="Menu"
                        />
                    </div>
                    <NavBar />
                </div>
                <div className="hidden sm:block">
                    <h1 className="text-5xl font-roboto-condensed font-bold mb-2 text-hci-lila">
                        Design Matters
                    </h1>
                    <h3 className="text-3xl font-roboto-condensed font-light text-hci-lila text-opacity-60">
                        Entrust us with your digital appearance
                    </h3>
                </div>
            </main>
        </header>
    );
};

export default Header;
