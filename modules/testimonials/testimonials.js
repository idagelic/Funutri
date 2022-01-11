import Testimonial from '@/components/testimonial';
import { testimonials } from '@/const/testimonialsList';

const Testimonials = () => {
    return (
        <section className="mt-12 sm:py-12 sm:bg-gray-50">
            <main className="max-w-4xl flex flex-col mx-auto">
                <div className="px-10">
                    <h2 className="capitalize text-3xl sm:text-4xl font-roboto-condensed font-bold text-gray-700">
                        What our customers are saying
                    </h2>
                    <h4 className="text-xl text-gray-400 mt-2">
                        Read case studies of our happy customers
                    </h4>
                </div>
                <div className="mt-12 sm:grid sm:grid-cols-2 sm:gap-4">
                    {testimonials.map((el) => (
                        <Testimonial
                            caption={el.caption}
                            imageSrc={el.imageSrc}
                            key={el.caption}
                        />
                    ))}
                </div>
                <button className="capitalize mt-12 mb-12 mx-auto px-10 py-3 border shadow-md whitespace-nowrap text-xl text-hci-lila font-medium hover:bg-gray-100">
                    View showcase
                </button>
            </main>
        </section>
    );
};

export default Testimonials;
