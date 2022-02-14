import Image from 'next/image'

export default function Product( data ){

    const product = data.product.node;

    console.log(product);

    return (
        <div>
            <h1>{product?.name}</h1>
            {product?.image?.sourceUrl ? (
                <img src={product?.image?.sourceUrl} width="640" height="426"/>
            ) : null}
            <article dangerouslySetInnerHTML={{__html: product?.content}}></article>
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
        `})
    })

    const json = await res.json()
    const products = json.data.products.edges;

    const paths = products?.map((product) => ({
        params: { slug: product.node.slug },
    }))

    return { paths, fallback: false }

}
