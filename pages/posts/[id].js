import { useRouter } from 'next/router'

export default function Post({ post }) {
  const router = useRouter()
  // const { id } = router.query
  console.log(router.query)

  return (
    <h1>{ post.title }</h1>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/blog')
  const posts = await res.json()

  const paths = posts.map((post) => `/posts/${post.id}`)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://127.0.0.1:8000/blog/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

