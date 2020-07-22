import fs from 'fs'
import path from 'path'

export default function File({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li>
          <h3>{post.filename}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts-data')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filepath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filepath, 'utf8')

    return {
      filename,
      content: fileContents
    }
  })

  return {
    props: {
      posts
    }
  }
}
