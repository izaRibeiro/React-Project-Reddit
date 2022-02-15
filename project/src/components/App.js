import React, { useState, useEffect } from 'react'
import Post from './Post'

function App() {
    const [posts, setPosts] = useState([])
    const [subreddit, setSubreddit] = useState('reactjs')
    
    useEffect(() => {
        fetch('https://www.reddit.com/r/reactjs.json').then(res => {
            res.json().then(data => {
                setPosts(data.data.children)
            })
        })
    }, [subreddit]);

    return (
        <div>
            <h1> Teste </h1>
            <div className="posts">
                { posts ? posts.map((post, index) => <Post key={index} post={post.data} />) : null }
            </div>
        </div>
    )
}

export default App