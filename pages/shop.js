import { useState, useEffect } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from "../components/Sidebar/Sidebar";

export default function Shop( {productCategories} ){

  useEffect(() => {
    
  }, []);

  return(
    <div>
      <Navbar/>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />

      <div className="box shop-container">
          <div className="tile">
            <div className="col-lg-12 shop-header">
              <div className="heading shop-heading">
                shop
              </div>
              <div className="heading shop-subheading">
                pick a category
              </div>
            </div>
          </div>
          <div className="tile categories-grid">
            {
              productCategories.map(category => {
                return (
                  <div className="category-item col-lg-6" key={category.node.slug}>
                    
                    <a href={`/categories/${category.node.slug}`}>
                      <div className="category-image-container">
                        <img src={category.node.image.sourceUrl} />
                      </div>
                      <div className="category-name">
                        {category.node.name}
                      </div>
                    </a>
                  </div>
                )
              })
            }
          </div>
      </div>      
      <Footer/>
    </div>
  )

}

export async function getStaticProps(){

  const res = await fetch('https://funutri-api.manistrausuvo.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query MyQuery {
            productCategories {
              edges {
                node {
                  id
                  productCategoryId
                  name
                  slug
                  description
                  image {
                    sourceUrl
                  }
                }
              }
            }
          }
          
          `,
      })
  })

  const json = await res.json()

  const productCategoriesSorted = json.data.productCategories.edges.sort((a, b) => (a.node.productCategoryId > b.node.productCategoryId) ? 1 : -1)

  console.log(productCategoriesSorted);

  return {
    props: {
      productCategories: productCategoriesSorted,
    },
  }

}
