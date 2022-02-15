import Image from 'next/image'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Product( {product, addToCart} ){

    const productObject = product.node;

    console.log(product);

    return (
        <div>            
            <Navbar/>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />

            <div className="post-page-container product-page-container">

                <div className="box post-page-content">

                    <div className="tile">

                        <div className="col-lg-6">                            
                            {productObject?.image?.sourceUrl ? (
                                <img src={productObject?.image?.sourceUrl} width="640" height="426"/>
                            ) : null}
                        </div>
                        
                        <div className="col-lg-6">
                            <div class="product-page-name"> 
                                <h1>{productObject?.name}</h1>
                            </div>

                            <article dangerouslySetInnerHTML={{__html: productObject?.description}}></article>

                            <div class="product-page-price-container">
                                <div class="product-page-price">
                                    {productObject?.price}
                                </div>                            
                            </div>

                            <div className="product-actions-container">
                                <div className="product-actions">
                                    <button className="button-empty" onClick={() => addToCart(productObject)}>
                                        <span> add to cart </span>
                                    </button>

                                    <button className="button-full">
                                        <span> buy now </span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer/>
        </div>
    )

}

export async function getStaticProps(context) {

    const res = await fetch('https://funutri-api.manistrausuvo.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query ($first: Int, $after: String) {
                products(first: $first, after: $after, where: {supportedTypesOnly: true}) {
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
                        description
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
            `
        })
    })

    console.log("Test.");
  
    const json = await res.json()
    const product = json.data?.products.edges.find(item => item.node.slug == context.params.slug);
    console.log(product);
  
    return {
      props: {
        product: product || null
      },
    }
  
  }


export async function getStaticPaths() {

    const res = await fetch('https://funutri-api.manistrausuvo.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query ($first: Int, $after: String) {
                products(first: $first, after: $after, where: {supportedTypesOnly: true}) {
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
                        description
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
        `})
    })

    const json = await res.json()
    const products = json.data.products.edges;

    const paths = products?.map((product) => ({
        params: { slug: product.node.slug },
    }))

    return { paths, fallback: false }

}
