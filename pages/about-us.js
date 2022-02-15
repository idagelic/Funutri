import { useState, useEffect } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import aboutUs from '../public/assets/images/about-us.png'
import aboutUs1 from '../public/assets/images/about-us-1.png'
import aboutUs2 from '../public/assets/images/about-us-2.png'
import aboutUs3 from '../public/assets/images/about-us-3.png'
import aboutUs4 from '../public/assets/images/about-us-4.png'
import Sidebar from "../components/Sidebar/Sidebar";

export default function AboutUs(){

  return (
    <div>
      <Navbar/>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />

      <div className="hero-image-container about-us-hero-image-container">
          <img src={aboutUs} />
      </div>

      <div className="post-page-container about-us-page-container">

          <div className="box post-page-content about-us-page-content">
            <div className="tile">
                <div className="heading">
                    the funutri team
                </div>
            </div>

            <div className="tile">
              <div className="col-lg-6">
                <div className="about-us-text">Funutri was founded in 2020. by a group of healthy lifestyle enthusiasts from Croatia.</div>
              </div>
              <div className="col-lg-6">
                <img src={aboutUs1} />
              </div>
            </div>

            <div className="tile">
              <div className="col-lg-6">
                <img src={aboutUs2} />
              </div>
              <div className="col-lg-6">
                <div className="about-us-text">Our mission is to lorem ipsum m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ret non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</div>
              </div>
            </div>

            <div className="tile">
              <div className="col-lg-12">
                <div className="about-us-text">
                  The first product created by the Funutri brand was a lorem ipsum m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                </div>
              </div>
            </div>
            
            <div className="tile">
              <div className="col-lg-12">
                <img src={aboutUs3} />
              </div>
            </div>

            <div className="tile">
              <div className="col-lg-12">
                <div className="about-us-text">
                  The first product created by the Funutri brand was a lorem ipsum m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                </div>
              </div>
            </div>
            
            <div className="tile">
              <div className="col-lg-12">
                <img src={aboutUs4} />
              </div>
            </div>

          </div>

      </div>
      
      <Footer/>
    </div>
  )

}