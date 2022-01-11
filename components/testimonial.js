import Image from 'next/image';
import Link from 'next/link';

const Testimonial = ({ caption, imageSrc, linkTo }) => (
    <div className="h-96 sm:border hover:cursor-pointer first:mt-0">
        <div className="h-4/5 bg-gray-100 relative">
            <Image
                src={imageSrc}
                layout="fill"
                objectFit="cover"
                objectPosition="0px 0px"
                alt="Design system"
            />
        </div>
        <div className="flex px-10 items-center relative mt-8 sm:hidden">
            <p className="uppercase sm:text-xl font-semibold text-hci-lila">
                {caption}
            </p>
            <div className="absolute right-10 h-full flex items-center">
                <Image
                    src={'/right.svg'}
                    layout="fixed"
                    width={15}
                    height={15}
                    alt="Right icon"
                />
            </div>
        </div>
        <div className="h-1/5 bg-gray-300 items-center justify-center relative hidden sm:flex">
            <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                <Link
                    href={linkTo || `/testimonials/${encodeURIComponent(caption)}`}
                >
                    {caption}
                </Link>
            </p>
            <div className="absolute right-4 h-full flex items-center">
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
);

export default Testimonial;
