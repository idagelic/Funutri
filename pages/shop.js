import { useState, useEffect } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function Shop( {productCategories} ){

  useEffect(() => {
    
  }, []);

  return(
    <div>
      <Navbar/>

      <div class="box shop-container">
          <div class="tile">
            <div class="col-lg-12 shop-header">
              <div class="heading shop-heading">
                shop
              </div>
              <div class="heading shop-subheading">
                pick a category
              </div>
            </div>
          </div>
          <div class="tile categories-grid">
            {
              productCategories.map(category => {
                return (
                  <div class="category-item col-lg-6" key={category.node.slug}>
                    
                    <a href={`/categories/${category.node.slug}`}>
                      <div class="category-image-container">
                        <img src={category.node.image.sourceUrl} />
                      </div>
                      <div class="category-name">
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
