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
        <div className="products-container">
        <div className="box">
            <div className="tile">
                <div className="heading">
                    most popular products
                </div>
            </div>
            <div className="tile">

                {
                productsList.map(product => {

                    return(

                        <div className="col-lg-4 product-container" key={product.node.slug}>

                            <a href={`/products/${product.node.slug}`}>
                                <div className="product-image"> 
                                    <img src={product.node.image.sourceUrl}/> 
                                </div>
                                <div className="product-name">
                                    {product.node.name}
                                </div>
                                <div className="product-description" dangerouslySetInnerHTML={{ __html: product.node.shortDescription }} >
                                </div>
                            </a>

                            <div className="product-spacer">
                            </div>
                            
                            <div className="product-price">
                                {product.node.price}
                            </div>

                            <div className="product-actions">
                                <button className="button-empty" onClick={() => addToCart(product)}>
                                    <span> add to cart </span>
                                </button>

                                <a href="https://funutri-api.manistrausuvo.com/checkout/">
                                    <button className="button-full">
                                        <span> buy now </span>
                                    </button>
                                </a>
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
