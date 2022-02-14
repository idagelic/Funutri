import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import cordyceps from '../../public/assets/images/ingredients/cordyceps.png'
import lionsMane from '../../public/assets/images/ingredients/lionsMane.png'
import chaga from '../../public/assets/images/ingredients/chaga.png'
import chanterelle from '../../public/assets/images/ingredients/chanterelle.png'

const PopularProducts = ({products, addToCart}) => {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        setProductsList(products.slice(0, 3));
    }, []);

    return (
        <div class="products-container">
        <div class="box">
            <div class="tile">
                <div class="heading">
                    most popular products
                </div>
            </div>
            <div class="tile">

                {
                productsList.map(product => {

                    return(

                        <div class="col-lg-4 product-container" key={product.node.slug}>

                            <a href={`/products/${product.node.slug}`}>
                                <div class="product-image"> 
                                    <img src={product.node.image.sourceUrl}/> 
                                </div>
                                <div class="product-name">
                                    {product.node.name}
                                </div>
                                <div class="product-description" dangerouslySetInnerHTML={{ __html: product.node.shortDescription }} >
                                </div>
                                <div class="product-price">
                                    {product.node.price}
                                </div>
                            </a>

                            <div class="product-spacer">
                            </div>

                            <div class="product-actions">
                                <button class="button-empty" onClick={() => addToCart(product)}>
                                    <span> add to cart </span>
                                </button>

                                <button class="button-full">
                                    <span> buy now </span>
                                </button>
                            </div>

                        </div>
                      )

                })


                }

            </div>            
        </div>
        </div>
    );
};

export default PopularProducts;
