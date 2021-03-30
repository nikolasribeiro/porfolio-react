import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPost = ( {post} ) => {
    return (
        <div className="blog animate__faster animate__animated animate__fadeIn">

            <div className="blog-image">
                <img 
                    src={post.image_blog}
                    alt="blog img"
                    style={{width: '1080px', height: '500px'}}
                />
            </div>
            <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <div className="short-description">
                {post.short_blog_description}
                </div>
                <div className="read-more-button">
                    <Link to={`./blog/${post.slug}`}>Read More</Link>
                    <div></div>
                </div>
                <div className="blog-footer">
                    <div className="blog-info">
                        Posted on {post.publish_date} by {post.author === 1 ? 'Nicolas': ''}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
