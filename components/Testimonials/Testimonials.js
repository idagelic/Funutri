import { useState, useEffect } from 'react';
import Image from 'next/image';
import testimonial1 from '../../public/assets/images/testimonials/testimonial1.jpg'
import testimonial2 from '../../public/assets/images/testimonials/testimonial2.jpg'
import testimonial3 from '../../public/assets/images/testimonials/testimonial3.jpg'
import testimonial4 from '../../public/assets/images/testimonials/testimonial4.jpg'

const Testimonials = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div className="testimonial-container">
            <div className="box">
                <div className="tile">
                    <div className="heading">
                        our satisfied partners
                    </div>
                </div>       
            </div>

            <div className="tile">

                <div className="col-lg-6">
                    <div className="testimonial-image">
                         <img src={testimonial1}/> 
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-right">
                        <div className="testimonial-name">
                            John Smith, Adriatic d.o.o.
                        </div>
                        <div className="testimonial-position">
                            Chief Executive Officer
                        </div>
                        <div className="testimonial-quote">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-left">
                        <div className="testimonial-name">
                            John Smith, Adriatic d.o.o.
                        </div>
                        <div className="testimonial-position">
                            Chief Executive Officer
                        </div>
                        <div className="testimonial-quote">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-image">
                         <img src={testimonial2}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={testimonial3}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-right">
                        <div className="testimonial-name">
                            John Smith, Adriatic d.o.o.
                        </div>
                        <div className="testimonial-position">
                            Chief Executive Officer
                        </div>
                        <div className="testimonial-quote">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-left">
                        <div className="testimonial-name">
                            John Smith, Adriatic d.o.o.
                        </div>
                        <div className="testimonial-position">
                            Chief Executive Officer
                        </div>
                        <div className="testimonial-quote">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={testimonial4}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>

            </div>     
        </div>
    );
};

export default Testimonials;
