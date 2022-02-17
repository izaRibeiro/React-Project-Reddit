import React, { useState, useEffect } from 'react'
import Post from './components/Post/Post'
import Filter from './components/Filter/Filter'
import More from './components/More/More'

function App() {
    const API_URL = 'https://www.reddit.com/r/reactjs/'
    const [posts, setPosts] = useState([])
    const [subreddit, setSubreddit] = useState('reactjs')
    const [typePost, setTypePost] = useState('hot')
    const [limit, setLimit] = useState(5)
    
    useEffect(() => {
        getPosts()
    }, [typePost, limit]);

    function handleClick(e) {
        setTypePost(e)
        setLimit(5)
    }

    function handleMore(e) {
        setLimit(limit + 5)
    }

    function getPosts() {
        fetch(`${API_URL}${typePost}.json?limit=${limit}`).then(res => {
            res.json().then(data => {
                setPosts(data.data.children)
            })
        })
    }

    return (
        <div className="App">
            <div id="title-box">
                <h2 id="main-title"> REACT<h2 id="main-title-js">JS</h2> </h2>
            </div>
            <Filter handleClick={(event) => {handleClick(event)}} />
            <div className="posts-body">
                <div className="posts">
                    { posts ? posts.map((post, index) => <Post key={index} post={post.data} />) : null }
                </div>
                <More handleMore={(event) => {handleMore(event)}} />
            </div>
        </div>
    )
}

export default App