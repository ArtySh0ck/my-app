import PostItem from './components/PostItem'
import './styles/App.css'
import React, { useState } from 'react'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JAVASCRIPT', body: 'JS is a cool thing tho!' },
    { id: 2, title: 'JAVASCRIPT', body: 'JS is a cool thing tho!' },
    { id: 3, title: 'JAVASCRIPT', body: 'JS is a cool thing tho!' },
  ])
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default App
