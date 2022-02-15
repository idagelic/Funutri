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
        <div className="ingredients-container">
        <div className="box">
            <div className="tile">
                <div className="heading">
                    the magical ingredients
                </div>
            </div>
            <div className="tile">

                <div className="col-lg-3 ingredient-container">
                    <a href="/posts/cordyceps">
                        <div className="ingredient-image"> <img src={cordyceps}/> </div>   
                        <div className="ingredient-name"> cordyceps </div>
                    </a>
                </div>

                <div className="col-lg-3 ingredient-container">
                    <a href="/posts/lions-mane">
                        <div className="ingredient-image"> <img src={lionsMane}/> </div>
                        <div className="ingredient-name"> lion's mane </div>
                    </a>
                </div>

                <div className="col-lg-3 ingredient-container">
                    <a href="/posts/chaga">
                        <div className="ingredient-image"> <img src={chaga}/> </div>
                        <div className="ingredient-name"> chaga </div>   
                    </a>
                </div>

                <div className="col-lg-3 ingredient-container">
                    <a href="/posts/chanterelle">
                        <div className="ingredient-image"> <img src={chanterelle}/> </div>
                        <div className="ingredient-name"> chanterelle </div>
                    </a>
                </div>

            </div>            
        </div>
        </div>
    );
};

export default Ingredients;
