import { useState, useEffect } from 'react';
import Image from 'next/image';
import cordyceps from '../../public/assets/images/ingredients/cordyceps.png'
import lionsMane from '../../public/assets/images/ingredients/lionsMane.png'
import chaga from '../../public/assets/images/ingredients/chaga.png'
import chanterelle from '../../public/assets/images/ingredients/chanterelle.png'

const Newsletter = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div class="newsletter">
            <div class="newsletter-text heading">
                join our newsletter and get 15% off first purchase
            </div>

            <div class="buttons-container">

                <a href="/account">
                    <button class="button-full">
                        <span> join today </span>
                    </button>
                </a>

                <a href="mailto:test@gmail.com">
                    <button class="button-empty">
                        <span> contact us </span>
                    </button>
                </a>

            </div>
        </div>
    );
};

export default Newsletter;
