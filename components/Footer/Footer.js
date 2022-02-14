import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoSrc from '../../public/assets/images/logo.png'
import facebook from '../../public/assets/images/socials/facebook.png'
import instagram from '../../public/assets/images/socials/instagram.png'
import pinterest from '../../public/assets/images/socials/pinterest.png'
import twitter from '../../public/assets/images/socials/twitter.png'

const Footer = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <div class="footer">
            <div class="footer-menu">
                <div class="footer-menu-left">
                    <div class="footer-menu-container">
                        <span><a href="#"> home </a></span>
                        <span><a href="#"> shop  </a></span>
                        <span><a href="#"> account </a></span>
                    </div>
                </div>
                <div class="footer-logo">
                    <a href="/">
                        <img src={logoSrc}/>
                    </a>
                </div>
                <div class="footer-menu-right">
                    <div class="footer-menu-container">
                        <span><a href="#"> faq </a></span>
                        <span><a href="#"> privacy policy </a></span>
                        <span><a href="#"> terms & conditions </a></span>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="footer-bottom">
                <div class="footer-social">
                    <div class="footer-social-item">
                        <a href="#">
                            <img src={facebook}/>
                        </a>
                    </div>   
                    <div class="footer-social-item">
                        <a href="#">
                            <img src={instagram}/>
                        </a>
                    </div>  
                    <div class="footer-social-item">
                        <a href="#">
                            <img src={pinterest}/>
                        </a>
                    </div>  
                    <div class="footer-social-item">
                        <a href="#">
                            <img src={twitter}/>
                        </a>
                    </div>  
                </div>
                <div class="footer-copyright">
                    &copy; funutri 2022
                </div>
            </div>
        </div>
    );
};

export default Footer;
