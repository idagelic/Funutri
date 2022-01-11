import Image from 'next/image';

import LogoImg from '@/assets/logo.png';

const Footer = () => {
    return (
        <section className="py-12 bg-hci-lila-dark text-hci-lila-light">
            <main className="max-w-4xl flex flex-col mx-auto">
                <button className="md:hidden capitalize mt-8 mb-20 mx-auto px-10 py-3 border shadow-md whitespace-nowrap text-2xl font-normal font-roboto-condensed font-medium text-hci-lila font-medium bg-hci-lila-light hover:bg-gray-100">
                    Let's change the world
                </button>

                <div className="flex items-start justify-around">
                    <div className="hidden md:block">
                        <Image
                            src={LogoImg}
                            layout="fixed"
                            width={50}
                            height={50}
                            alt="Design logo"
                        />
                        <div className="mt-8">
                            <div className="flex items-center">
                                <Image
                                    src={'/phone.svg'}
                                    layout="fixed"
                                    width={15}
                                    height={15}
                                    alt="Phone icon"
                                />
                                <p className="ml-4">+385 123 0000</p>
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src={'/email.svg'}
                                    layout="fixed"
                                    width={15}
                                    height={15}
                                    alt="Email icon"
                                />
                                <p className="ml-4">design@fesb.hr</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                            Contact us
                        </h3>
                        <h4 className="text-xl">Drop us a quick message</h4>
                        <div className="mt-2 flex flex-col text-hci-lila-dark">
                            <input
                                className="mt-4 p-2 w-4/5 opacity-80"
                                placeholder="Your Name"
                                type="text"
                            />
                            <input
                                className="mt-4 p-2 w-4/5 opacity-80"
                                placeholder="Your E-mail"
                                type="text"
                            />
                            <textarea
                                className="mt-4 p-2 resize-none opacity-80"
                                placeholder="Your Message"
                                cols="30"
                                rows="8"
                            ></textarea>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                            Contact us
                        </h3>
                        <ul className="mt-4 list-none font-medium">
                            <li className="whitespace-nowrap cursor-pointer">
                                +385 123 0000
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                design@fesb.hr
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                            Sitemap
                        </h3>
                        <h4 className="text-xl hidden md:block">
                            Explore our pages
                        </h4>
                        <ul className="mt-4 list-none font-medium md:text-white">
                            <li className="whitespace-nowrap cursor-pointer">
                                Home
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                About us
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Products
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Blog
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Contact us
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Private
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex mx-auto mt-16 items-center md:hidden">
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={50}
                        height={50}
                        alt="Design logo"
                    />

                    <h1 className="ml-6 text-4xl font-roboto-condensed font-bold mb-2">
                        Design Matters
                    </h1>
                </div>

                <p className="mt-12 mx-auto md:mx-0">
                    Copyright @ 2021 FESB. All rights reserved.
                </p>
            </main>
        </section>
    );
};

export default Footer;
