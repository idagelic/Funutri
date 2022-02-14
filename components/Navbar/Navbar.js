import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoSrc from '../../public/assets/images/logo.png'
import cartEmptySrc from '../../public/assets/images/cart-empty.png'
import cartFullSrc from '../../public/assets/images/cart-full.png'
import {useRouter} from 'next/router';

const menuItemsList = [
    {
        name: 'home',
        slug: '',
        isClicked: false
    },
    {
        name: 'about us',
        slug: 'about-us',
        isClicked: false
    },
    {
        name: 'contact',
        slug: 'contact',
        isClicked: false
    },
    {
        name: 'faq',
        slug: 'faq',
        isClicked: false
    },
    {
        name: 'blog',
        slug: 'blog',
        isClicked: false
    }
];

const tempCart = [
    {
        id: "cHJvZHVjdDoyMg==",
        name: "Product 456 456",
        sourceUrl: "https://funutri-api.manistrausuvo.com/wp-content/uploads/2022/02/chanterelle.png",
        price: 20
    },
    {
        id: "cHJvZHVjdDoyMA==",
        name: "Product 123123",
        sourceUrl: "https://funutri-api.manistrausuvo.com/wp-content/uploads/2022/02/chaga.png",
        price: 30
    }
];

const Navbar = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [menuItems, setMenuItems] = useState(menuItemsList);
    const [cartItems, setCartItems] = useState([]);

    const [test123, setTest123] = useState([]);

    const router = useRouter()

    useEffect(() => {
        
        if(JSON.parse(localStorage.getItem('cartItems'))) {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')));
            console.log("Evo:");
            console.log(JSON.parse(localStorage.getItem('cartItems')));
        }
        
    }, []);

    useEffect(() => {

        let updatedMenuItems = menuItemsList.map(item => {
            if(item.slug == router.pathname.split('/').pop()) item.isClicked = true;
            return item;
        })

        setMenuItems(updatedMenuItems);
        setIsClicked(true);
    }, [test123]);

    useEffect(() => {

        if(props.cartUpdate) {
            const newItem = {
                id: props.cartUpdate.node.id,
                name: props.cartUpdate.node.name,
                sourceUrl: props.cartUpdate.node.image.sourceUrl,
                price: props.cartUpdate.node.price
            };

            setCartItems([...cartItems, newItem]);
            setIsCartOpen(true);
        }

    }, [props.cartRefresh]);

    useEffect(() => {

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems]);

    function addToCart() {

        setTest123(JSON.parse(localStorage.getItem('test123')) || []);

        console.log(localStorage.getItem('test123'));

        setTest123(test123 => [...test123, 10]);

        localStorage.setItem('test123', JSON.stringify(test123));
        console.log(test123);
    }

    function toggleCartModal() {
        setIsCartOpen(!isCartOpen);
    }

    function cartRemoveItem(id) {
        setCartItems(cartItems.filter(item => item.id !== id))
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        if(cartItems.length == 0) setIsCartOpen(false);
    }

    return (
        <header>
            <nav class="navbar sticky-nav">
                <div class="box navbar-content">
                    <div class="logo">
                        <a href="/">
                            <img src={logoSrc}/>
                        </a>
                    </div>

                    <ul class="menu-items">
                        {menuItems.map((item) => (
                            <a href={item.slug}><li className={`menu-item ${item.isClicked ? "menu-item-clicked" : ""}`}>{item.name}</li></a>
                        ))}
                    </ul>

                    <div class="buttons-container">

                        <a href="/account">
                            <button class="button-empty">
                                <span> account </span>
                            </button>
                        </a>

                        <a href="/shop">
                            <button class="button-full">
                                <span> shop now </span>
                            </button>
                        </a>

                        <button class="navbar-cart" >
                            <img src={cartItems.length > 0 ? cartFullSrc : cartEmptySrc} onClick={toggleCartModal}/>
                            <div className={`cart-modal ${isCartOpen ? "cart-modal-open" : ""}`}>
                                <div class="cart-heading">
                                    cart
                                </div>
                                <div class="cart-empty">
                                    {cartItems.length == 0 ? "The cart is empty." : ""}
                                </div>
                                {cartItems.map((item, index) => (
                                    <div className={`cart-item ${index % 2 == 1 ? "cart-item-dark" : "cart-item-light"}`}>
                                        <div class="cart-img">
                                            <img src={item.sourceUrl} />
                                        </div>
                                        <div class="cart-item-name">
                                            {item.name.length < 20 ? item.name : item.name.slice(0,18) + "..."}
                                        </div>   
                                        <div class="cart-item-spacer">
                                            
                                        </div>
                                        <div class="cart-item-price">
                                            € {item.price}
                                        </div>   
                                        <div class="cart-item-delete" onClick={() => cartRemoveItem(item.id)}>
                                            ×
                                        </div>        
                                    </div>
                                ))}
                                <div class="cart-footer">
                                    <div class="cart-total">
                                        total: 1234
                                    </div>
                                    <div class="cart-checkout-button">
                                        <a href={`https://funutri-api.manistrausuvo.com/checkout`}>
                                            <button class="button-empty">
                                                <span> checkout </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </button>

                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
