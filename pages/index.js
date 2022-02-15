import { useState, useEffect } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar';
import Ingredients from '../components/Ingredients/Ingredients';
import HomeHero from '../components/HomeHero/HomeHero';
import Testimonials from '../components/Testimonials/Testimonials';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home( {products} ){

  const [cartUpdate, doCartUpdate] = useState(null);
  const [cartRefresh, doCartRefresh] = useState(0);

  useEffect(() => {
    console.log(products);
  }, []);

  function addToCart(item) {
    doCartUpdate(item);
    doCartRefresh(cartRefresh + 1);
  }

  return (
    <div>
      <Navbar cartUpdate={cartUpdate} cartRefresh={cartRefresh}/>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />
      <HomeHero/>
      <Ingredients/>
      <PopularProducts products={products.edges} addToCart={addToCart}/>
      <Testimonials/>
      <Newsletter/>
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
          query ($first: Int, $after: String) {
            products(first: $first, after: $after, where: { supportedTypesOnly: true }) {
                edges {
                    cursor
                    node {
                        id
                        slug
                        name
                        type
                        shortDescription
                        image {
                            id
                            sourceUrl
                            altText
                        }
                        galleryImages {
                            nodes {
                                id
                                sourceUrl
                                altText
                            }
                        }
                        ... on SimpleProduct {
                            onSale
                            price
                            regularPrice
                        }
                        ... on VariableProduct {
                            onSale
                            price
                            regularPrice
                        }
                    }
                }
            }
        }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
      products: json.data.products,
    },
  }

}