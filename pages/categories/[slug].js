import Image from 'next/image'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Category( {products} ){

    console.log("Proizvodi:");
    console.log(products);

    return (
        <div>
          <Navbar/>
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />  

          <div className="post-page-container blog-page-container category-page-container">

          <div className="box post-page-content about-us-page-content">
            <div className="tile">
                  <div className="heading shop-heading">
                    funutri {products[0].node.productCategories.nodes[0].slug}
                  </div>
                  <div className="heading shop-subheading">
                    naturally extracted, FDA approved
                  </div>
            </div>
            <div className="blog-posts">
            
            {products.map(product => {
                return (
                  <a href={`/products/${product.node.slug}`} key={product.node.slug}>
                  <div className="blog-post tile">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="blog-post-image">
                        {product.node.image.sourceUrl ? <img src={product.node.image.sourceUrl} /> : ""}
                      </div>
                      <div className="blog-post-title">
                        {product.node.name} <br/>
                        <div class="product-grid-price">{product.node.price}</div>
                      </div>

                      {/* <div className="blog-post-content" dangerouslySetInnerHTML={{__html: (post.content?.slice(0, 400) + "...")}}></div> */}
                    </div>
                  </div>
                  </a>
                )
            })}

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
                      }
                      ... on VariableProduct {
                        onSale
                        price
                        regularPrice
                      }
                      productCategories {
                        nodes {
                          slug
                        }
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

    console.log(json.data?.products.edges[0].node.productCategories.nodes[0].slug);

    const productsList = json.data?.products.edges.filter(item => item.node.productCategories.nodes[0].slug == context.params.slug);

    console.log(productsList);
  
    return {
      props: {
        products: productsList || null
      },
    }
  
  }


export async function getStaticPaths() {

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
        `})
    })

    const json = await res.json()
    const products = json.data.productCategories.edges;

    const paths = products?.map((product) => ({
        params: {
            slug: product.node.slug
        },
    }))

    return { paths, fallback: false }   

}
