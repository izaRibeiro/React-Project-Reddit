import React from 'react'
import './Post.css';
  
function Post(props) {
    return (
        <article>
            <hr />
            <div class="box">
                <img src="./images/teacher1.jpg"/>
            </div>
            <div class="box">
                <h4 className="post-title"> { props.post.title } </h4>
                <h4 className="post-info"> enviado há 6 horas por <h4 className="author">{ props.post.author }</h4></h4>
                <h4 className="domain"> dominio.io </h4>
            </div>
        </article>
    )
}

export default Post