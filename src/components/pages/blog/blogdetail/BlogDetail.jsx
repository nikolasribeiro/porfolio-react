import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { PorfolioContext } from '../../../Context/PorfolioContext';
import './BlogDetail.scss';
import dateFormat from 'dateformat';

export const BlogDetail = () => {

    const { blogs, setToggleMenu} = useContext(PorfolioContext);

    useEffect(() => {
        setToggleMenu(false);
    }, [setToggleMenu])

    const getBlogBySlug = (slug) => {
        return blogs.find(blog => blog.slug === slug);
    }

    const { slug } = useParams();
    const post = getBlogBySlug(slug);
    
    if (!post){
        return <Redirect to="/blog" />;
    }

    const {
        title,
        image_blog,
        long_blog_description,
        author,
        publish_date
    } = post;

    return (
        <div className="detail-container">

            <div className="detail-post">
                
                <div className="detail-header">
                    <h1 className="detail-title">{title}</h1>
                    <p className="detail-author">By {author === 1? 'Nicolas':''}</p>
                    <span className="detail-date_post">
                        Posted on {dateFormat(publish_date, "mmmm dS, yyyy")}
                    </span>
                    <hr/>
                </div>

                <div className="detail-body">
                    <div className="detail-image">
                        <img 
                            src={image_blog}
                            alt="Detail img"
                            style={{maxHeight:'600px'}}
                        />
                        <hr/>
                    </div>

                    <div className="detail-content">
                        {long_blog_description}
                    </div>
                </div>

            </div>
        </div>
    )
}
