import { useState, useEffect } from 'react';
import Image from 'next/image';
import cordyceps from '../../public/assets/images/ingredients/cordyceps.png'
import lionsMane from '../../public/assets/images/ingredients/lionsMane.png'
import chaga from '../../public/assets/images/ingredients/chaga.png'
import chanterelle from '../../public/assets/images/ingredients/chanterelle.png'

const Ingredients = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div class="ingredients-container">
        <div class="box">
            <div class="tile">
                <div class="heading">
                    the magical ingredients
                </div>
            </div>
            <div class="tile">

                <div class="col-lg-3 ingredient-container">
                    <a href="/posts/cordyceps">
                        <div class="ingredient-image"> <img src={cordyceps}/> </div>   
                        <div class="ingredient-name"> cordyceps </div>
                    </a>
                </div>

                <div class="col-lg-3 ingredient-container">
                    <a href="/posts/lions-mane">
                        <div class="ingredient-image"> <img src={lionsMane}/> </div>
                        <div class="ingredient-name"> lion's mane </div>
                    </a>
                </div>

                <div class="col-lg-3 ingredient-container">
                    <a href="/posts/chaga">
                        <div class="ingredient-image"> <img src={chaga}/> </div>
                        <div class="ingredient-name"> chaga </div>   
                    </a>
                </div>

                <div class="col-lg-3 ingredient-container">
                    <a href="/posts/chanterelle">
                        <div class="ingredient-image"> <img src={chanterelle}/> </div>
                        <div class="ingredient-name"> chanterelle </div>
                    </a>
                </div>

            </div>            
        </div>
        </div>
    );
};

export default Ingredients;
