import { useRouter } from 'next/router';

const Testimonial = () => {
    const router = useRouter();

    return <h1 className="text-2xl">HI! You are on {router.query.testimonialId}</h1>;
};

export default Testimonial;
