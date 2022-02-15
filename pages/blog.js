import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import blogImg from '../public/assets/images/blog.png'

export default function Blog( {posts} ){

  return(
    <div>
    <Navbar/>

      <div className="hero-image-container blog-hero-image-container">
          <img src={blogImg} />
      </div>

    <div className="post-page-container blog-page-container">

      <div className="box post-page-content about-us-page-content">
        <div className="tile">
              <div className="heading shop-heading">
                blog
              </div>
              <div className="heading shop-subheading">
                dive into the world of funutri
              </div>
        </div>
        <div className="blog-posts">
        {
          posts.nodes.map(post => {
            return(
              <a href={`/posts/${post.slug}`} key={post.slug}>
              <div className="blog-post tile">
                <div className="col-lg-10 offset-lg-1">
                  <div className="blog-post-image">
                    {post.featuredImage?.node.sourceUrl ? <img src={post.featuredImage.node.sourceUrl} /> : ""}
                  </div>
                  <div className="blog-post-title">
                    {post.title}
                  </div>

                  {/* <div className="blog-post-content" dangerouslySetInnerHTML={{__html: (post.content?.slice(0, 400) + "...")}}></div> */}
                </div>
              </div>
              </a>
            )
          })
        }
        </div>
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
          query HomePageQuery {
            posts(first: 500) {
              nodes {
                slug
                title
                content
                featuredImage {
                  node {
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

  return {
    props: {
        posts: json.data.posts,
    },
  }

}
