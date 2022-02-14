import Image from 'next/image'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Post( data ){

    const post = data.post;
    console.log(post);

    return (
        <div>
            <Navbar/>

            <div class="hero-image-container">
                <img src={post.featuredImage?.node?.sourceUrl} />
            </div>

            <div class="post-page-container">

                <div class="box post-page-content">
                    <div class="tile">
                        {/* <div class="col-lg-12 post-page-header">
                            <div class="heading post-page-heading">
                            shop
                            </div>
                            <div class="heading post-page-subheading">
                            pick a category
                            </div>
                        </div> */}
                    </div>

                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.content}}></div>

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
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('https://funutri-api.manistrausuvo.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}
