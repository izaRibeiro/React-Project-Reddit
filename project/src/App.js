import React, { useState, useEffect } from 'react'
import Post from './components/Post/Post'
import Filter from './components/Filter/Filter'
import More from './components/More/More'

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
        <div className="App">
            <div id="title-box">
                <h2 id="main-title"> REACT<h2 id="main-title-js">JS</h2> </h2>
            </div>
            <Filter />
            <div className="posts-body">
                <div className="posts">
                    { posts ? posts.map((post, index) => <Post key={index} post={post.data} />) : null }
                </div>
                <More />
            </div>
        </div>
    )
}

export default App