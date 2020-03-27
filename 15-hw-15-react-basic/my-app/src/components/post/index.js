import React from 'react';

function post(props){
        return (
            <div className='post'>
                <div className="user">
                <div className='userInfo'>
                    <div className='photoUser'>
                        <img src={props.photo} alt="Users avatar" className="photoUser__item"/>
                    </div>
                    <div className='userDate'>
                        <div className="userName">
                        <span>{props.name}</span>
                        <i className="fas fa-check-circle"></i>
                        <div className="userNick"> 
                        <span>{props.nickname}</span>·<span className='datePost'>{props.date}</span>
                        </div>
                        </div>
                    <div className='content'>
                        {props.content}
                    </div>
                    </div>
                </div>
                    <button className='hidePost'></button>
                    </div>
                
                <div className='imagePost'>
                    <img src={props.image} alt="Posts item"className="imagePost__item"/>
                
                <div className="imageFooter">
                    <div className="btn-postFooter comments">
                        <button className="btn-comments btn-post__likeItems">
                        <i className="far fa-comment fa-2x"></i>
                        </button>
                        {props.comments}
                    </div>
                    <div className="btn-postFooter comments">
                        <button className="btn-share btn-post__likeItems">
                        <i className="fas fa-retweet fa-2x"></i>
                        </button>
                        {props.share}
                    </div>
                    <div className="btn-postFooter comments">
                        <button className="btn-like btn-post__likeItems">
                        <i className="far fa-heart fa-2x"></i>
                        </button>
                        {props.like}
                    </div>
                    <div className="btn-postFooter comments">
                        <button className="btn-download btn-post__likeItems">
                        <i className="fas fa-download fa-2x"></i>
                        </button>
                    </div>

                </div>
                </div>
            </div>
        )
    
}

export default post;