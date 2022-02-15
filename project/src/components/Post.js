import React from 'react'

function Post(props) {
    return (
        <article>
            <h3> { props.post.title } </h3>
            <h3> { props.post.author } </h3>
            <hr />
        </article>
    )
}

export default Post