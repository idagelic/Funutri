import Image from 'next/image'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Post( data ){

    const post = data.post;
    console.log(post);

    return (
        <div>
            <Navbar/>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Home"} />

            <div className="hero-image-container">
                <img src={post.featuredImage?.node?.sourceUrl} />
            </div>

            <div className="post-page-container">

                <div className="box post-page-content">

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
                posts (first: 500) {
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
