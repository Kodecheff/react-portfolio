import React, {useState} from 'react'
import {useQuery} from 'react-query'

function Blog() {
  const [page, setPage] = useState(0)

  const query = `{
    user(username: "kodecheff"){
      publication {
        posts(page: ${page}){
          slug
          title
          brief
          coverImage
        }
      }
    }
  }`

  // Fetches post via hashnode
const fetchPosts = async () => {
  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({query})
  })

  return response.json()
}

const {data, status}  = useQuery('blog', fetchPosts)
if(status === 'success')
  console.log(data.data)


  return (
    <div className="blog-page container">
      {status === 'loading' && (<div><h6>Loading data...</h6></div>)}
      {status === 'error' && (<div><h6>Error fetching data</h6></div>)}
      {status === 'success' && (
        <>
          <div className="d-flex flex-row justify-content-around flex-wrap mt-4">
            {data.data.user.publication.posts.map(post => (
              <div class="card" style={{width: "18rem"}}>
                <img src={post.coverImage} className="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{post.title}</h5>
                  <p class="card-text">
                    {post.brief}
                  </p>
                  <a target='_blank' href={`https://kodecheff.hashnode.dev/${post.slug}`} class="btn btn-primary">Read more</a>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setPage(old =>Math.max(old-1, 0))}>Previous</button>
          <button onClick={() => setPage(old =>Math.max(old+1, 0))}>Next</button>
        </>
      )}
    </div>
  )
}

export default Blog
