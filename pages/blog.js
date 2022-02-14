import Link from 'next/link'

export default function Blog( {posts} ){

  return(
    <div>
      <h1>Hello From The Home Page!</h1>
      {
        posts.nodes.map(post => {
          return(
            <ul key={post.slug}>
              <li>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            </ul>
          )
        })
      }
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
            posts (first: 500) {
              nodes {
                slug
                title
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
