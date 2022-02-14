import Image from 'next/image'

export default function Category( {products} ){

    console.log("Proizvodi:");
    console.log(products);

    return (
        <div>
            Woo.
            {products.map(product => {
                return (
                <div>
                    <h1>{product?.node.name}</h1>
                    {product?.node.image?.sourceUrl ? (
                        <img src={product?.node.image?.sourceUrl} width="640" height="426"/>
                    ) : null}
                    <article dangerouslySetInnerHTML={{__html: product?.node.content}}></article>
                </div>
                )
            })}
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
