import Image from 'next/image';

import CTAImg from '@/assets/grow_business.jpg';

const width = 410;
const height = width / (508 / 440);

export default function Cta() {
    return (
        <section className="pt-10 sm:pt-12">
            <main className="max-w-4xl mx-auto flex flex-col sm:flex-row align-bottom">
                <div className="text-center px-10 sm:hidden">
                    <h1 className="text-5xl font-roboto-condensed font-bold mb-2 text-hci-lila">
                        Design Matters
                    </h1>
                    <h3 className="text-2xl font-roboto-condensed font-light text-hci-lila">
                        Entrust us with your digital appearance
                    </h3>

                    <p className="my-10 leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <button className="w-2/3 py-3 bg-hci-lila-dark font-roboto-condensed shadow-md whitespace-nowrap text-lg text-white font-semibold">
                        Book a meeting
                    </button>
                </div>

                <div className="mt-14 mb-4 px-10 sm:hidden">
                    <h2 className="capitalize text-3xl font-roboto-condensed font-bold text-gray-700">
                        Grow your business
                        <br />
                        <span className="capitalize text-hci-lila">with us</span>
                    </h2>
                </div>

                <div className="flex relative h-80 w-full sm:hidden">
                    <Image
                        src={CTAImg}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="0px 0px"
                        alt="Grow business"
                    />
                </div>

                <div style={{ width }} className="relative hidden sm:flex">
                    <Image
                        src={CTAImg}
                        layout="fill"
                        objectFit="cover"
                        alt="Grow business"
                    />
                </div>

                <div className="px-10 mt-4 sm:hidden">
                    <h4 className="text-lg text-gray-400">
                        Beautify your website and brand
                    </h4>
                    <p className="mt-4 leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex items-center relative mt-4">
                        <p className="uppercase mr-4 text-lg font-semibold text-hci-lila">
                            Get in touch with us
                        </p>
                        <div className="flex items-center">
                            <Image
                                src={'/right.svg'}
                                layout="fixed"
                                width={15}
                                height={15}
                                alt="Right icon"
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:ml-8 px-5 sm:pl-0 flex-col justify-between hidden w-1/2 sm:flex">
                    <div>
                        <div>
                            <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-gray-700">
                                Grow your business with us
                            </h2>
                            <h4 className="text-xl text-gray-400 mt-2">
                                Beautify your website and brand
                            </h4>
                        </div>
                        <p className="mt-4 leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p className="mt-2 leading-6 hidden md:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                    <button className="w-2/3 min-w-min px-5 py-3 mt-8 bg-red-700 hover:bg-red-800 shadow-md whitespace-nowrap text-xl text-white font-medium">
                        Book a meeting
                    </button>
                </div>
            </main>
        </section>
    );
}
