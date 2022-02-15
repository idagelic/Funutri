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
        <div className="footer">
            <hr className="footer-upper-hr"/>
            <div className="footer-menu">
                <div className="footer-menu-left">
                    <div className="footer-menu-container">
                        <span><a href="#"> home </a></span>
                        <span><a href="#"> shop  </a></span>
                        <span><a href="#"> account </a></span>
                    </div>
                </div>
                <div className="footer-logo">
                    <a href="/">
                        <img src={logoSrc}/>
                    </a>
                </div>
                <div className="footer-menu-right">
                    <div className="footer-menu-container">
                        <span><a href="#"> faq </a></span>
                        <span><a href="#"> privacy policy </a></span>
                        <span><a href="#"> terms & conditions </a></span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="footer-social">
                    <div className="footer-social-item">
                        <a href="#">
                            <img src={facebook}/>
                        </a>
                    </div>   
                    <div className="footer-social-item">
                        <a href="#">
                            <img src={instagram}/>
                        </a>
                    </div>  
                    <div className="footer-social-item">
                        <a href="#">
                            <img src={pinterest}/>
                        </a>
                    </div>  
                    <div className="footer-social-item">
                        <a href="#">
                            <img src={twitter}/>
                        </a>
                    </div>  
                </div>
                <div className="footer-copyright">
                    &copy; funutri 2022
                </div>
            </div>
        </div>
    );
};

export default Footer;
