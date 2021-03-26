import React from 'react';
import { Redirect, useParams } from 'react-router';
import { getBlogBySlug } from '../../../../selectors/getBlogBySlug';
import './BlogDetail.scss';

export const BlogDetail = () => {

    const { slug } = useParams();
    const post = getBlogBySlug(slug);
    
    if (!post){
        return <Redirect to="/blog" />;
    }

    const {
        title,
        longDesc,
        blogPostDate,
        author
    } = post;

    return (
        <div className="detail-container">

            <div className="detail-post">
                
                <div className="detail-header">
                    <h1 className="detail-title">{title}</h1>
                    <p className="detail-author">By {author}</p>
                    <span className="detail-date_post">
                        Posted on {blogPostDate}
                    </span>
                    <hr/>
                </div>

                <div className="detail-body">
                    <div className="detail-image">
                        <img 
                            src="../assets/img/image1.jpg"
                            alt="Detail img"
                            style={{maxHeight:'600px'}}
                        />
                        <hr/>
                    </div>

                    <div className="detail-content">
                        {longDesc}
                    </div>
                </div>

            </div>
        </div>
    )
}
