import React from 'react'
import './Post.css';
  
function Post(props) {
    return (
        <article>
            <hr />
            <div class="box">
                <img className="post-image" src="https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png?width=256&s=13a87a036836ce95570a76feb53f27e61717ad1b"/>
                <div className="post-box">
                    <h4 className="post-title"> { props.post.title } </h4>
                    <h4 className="post-info"> enviado por <h4 className="author">{ props.post.author }</h4></h4>
                    <a href={ props.post.url } className="domain"> Ir para a publicação </a>
                </div>
            </div>
        </article>
    )
}

export default Post