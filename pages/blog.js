import React from 'react'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Blog

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/blog')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}
