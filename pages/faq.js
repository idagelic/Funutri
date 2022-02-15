import { useState, useEffect } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from "../components/Sidebar/Sidebar";

import faq from '../public/assets/images/faq-hero.jpg'

const entriesList = [
  {
    question: "Are the mushrooms in your products safe?",
    answer: "Mushrooms we are using are adaptogens, and their extracts are non toxic remedies for balancing, optimizing and rejuvenating your body and brain. There are no shown side-effects when consumed even in high amounts and over long periods of time. However, if you have any concern or body response that suggests otherwise we advise you to consult with your medical professional.",
    expanded: false
  },
  {
    question: "Are the products vegan and gluten free?",
    answer: "All our products are vegan, gluten-free, cholesterol-free, soy-free, and peanut-free. They are also are free from all pesticides and additives.",
    expanded: false
  },
  {
    question: "Should I choose a product with Cordyceps or Lion's mane?",
    answer: "If you want to work out on your body function/skills so try Cordyceps, as they improve Energy production, endurance and stamina. If you want to work out on your body function/skills so try Cordyceps, as they improve Energy production, endurance and stamina.",
    expanded: false
  },
  {
    question: "Are there any customs fees?",
    answer: "Import duties, taxes, and charges are not included in the item price or shipping cost. These charges are the buyer’s responsibility. Please check with your country’s customs office to determine if and what these additional costs will be prior to bidding or buying. International orders/shipments may be subject to the possible opening of packages and inspection of goods by customs officials in the country of delivery. Mushroom Cups is not responsible for orders that are held up at customs, damaged by customs, or refused entrance by customs due to this process.",
    expanded: false
  },
  {
    question: "Should I take these products while being pregnant or nursing?",
    answer: "Mushroom extracts are very safe in general due to their medicinal, adaptogenic properties. Nonetheless, we can’t give any recommendation concerning usage of Mushrooms coffee while pregnant or nursing, since we didn’t have a chance to analyse the data big enough for that specific case of usage. So, we recommend for you to consult with your healthcare professional.",
    expanded: false
  },
  {
    question: "Do you offer samples?",
    answer: "We don’t offer samples via web-shop, but there is number of our re-sellers that sell single packages. All our products are vegan, gluten-free, cholesterol-free, soy-free, and peanut-free. They are also are free from all pesticides and additives. Our mushrooms extract are safe even for many people with mushroom allergies, because the amounts of salicylates and glutamate are very small. Nonetheless, if you are allergic to mushrooms we suggest extra caution and starting with half or third of one packet to check your body’s response.",
    expanded: false
  }
];

export default function Faq() {

  const [entries, setEntries] = useState(entriesList);

  function handleClick(i) {
    const newEntriesList = entries.slice();

    newEntriesList.map((el, index) => {
      if(index != i) el.expanded = false;
      if(index == i) {
        if(el.expanded == true) el.expanded = false;
        else if(el.expanded == false) el.expanded = true;
      }
    })

    setEntries(newEntriesList);

    console.log(entries);
  }

  return (
    <div>
      <Navbar/>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />

      <div className="hero-image-container about-us-hero-image-container faq-hero-image-container">
          <img src={faq} />
      </div>

      <div className="post-page-container about-us-page-container">

          <div className="box post-page-content about-us-page-content">
            <div className="tile">
                <div className="heading">
                    frequently asked questions
                </div>
            </div>

            <div id="id-faq">

                <div className="box">              
                  <div itemScope itemType="https://schema.org/FAQPage" className="id-accordion">

                    {
                      entries.map((item, index) => {
                        return (
                          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="id-accordion-item">
                              <button id={"id-accordion-button-" + index} aria-expanded={item.expanded} onClick={() => handleClick(index)}>
                                  <div className="id-accordion-title-wrapper">
                                      <span itemProp="name" className="id-accordion-title">
                                          {item.question}
                                      </span>
                                  </div>
                                  <span className="icon" aria-hidden="true">
    
                                  </span>
                              </button>
                              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="id-accordion-content">
                              <div itemProp="text">
                                {item.answer}
                              </div>
                              </div>
                          </div>
                        )
                      })

                    }

                      {/* <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="id-accordion-item">
                          <button id="id-accordion-button-1" aria-expanded="false" onClick={console.log("test")}>
                              <div className="id-accordion-title-wrapper">
                                  <span itemProp="name" className="id-accordion-title">
                                      Je li akceleratorski program jednokratni događaj ili postoje dodatne aktivnosti podrške?
                                  </span>
                              </div>
                              <span className="icon" aria-hidden="true">

                              </span>
                          </button>
                          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="id-accordion-content">
                          <div itemProp="text">
                              <p>3angle akceleratorski program je dio <b>CCI4Tourism projekta</b> u okviru kojeg je planirana provedba dva ciklusa TAP programa. Prvi ciklus s početkom u ožujku, a drugi s
                              početkom u rujnu 2021. godine. </p>
                              <p>Aktivnost podrške kulturnim i kreativnim industrijama (KKI) nije ograničeno samo na TAP akceleratorski program. Iako on u ovom obimu nije dalje planiran, 
                              projekt pedviđa dodatne radionice, kao npr. <b><i>design thinking</i></b> te uspostava <b>kreativnih hub-ova</b> koji će kontinuirano pružati podršku kvalitetnim poslovnim idejama
                              te sudjelovati u transferu dobre prakse.</p>
                          </div>
                          </div>
                      </div> */}


                      </div>                        
                  </div>

                  </div>
            </div>

      </div>
      
      <Footer/>
    </div>
  )

}