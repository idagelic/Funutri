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

export default function Account(){

  return (
    <div>
      <Navbar/>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />

      <div className="post-page-container about-us-page-container account-page-container">

          <div className="box post-page-content about-us-page-content">
            <div className="tile">
                <div className="heading">
                    log in to your account
                </div>
                
                <div className="account-inputs-container">
                <div className="account-input-container">
                  <input type="text" id="login" class="fadeIn second" name="login" placeholder="username" />
                </div>

                <div className="account-input-container">
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                </div>
                </div>

                <div className="account-input-container">
                  <button className="button-full">
                      <span> shop now </span>
                  </button>
                </div>              

            </div>
          </div>

      </div>
      
      <Footer/>
    </div>
  )

}