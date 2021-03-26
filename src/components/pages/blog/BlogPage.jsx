import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PorfolioContext } from '../../Context/PorfolioContext';

import './BlogPage.scss';

export const BlogPage = () => {

    const { blogs } = useContext(PorfolioContext);


    const [inputSearch, setInputSearch] = useState({
        search: ""
    });
    const { search } = inputSearch;

    const handleInputChange = ({ target }) => {
        setInputSearch({
            ...inputSearch,
            [target.name]:target.value
        });
    }
    
    let filteredBlogs = blogs.filter(post => (
        post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    ));

    return (
        <div className="blog-wrapper">

            <div className="blog-container">

                {filteredBlogs.map(post => (

                    <div className="blog animate__faster animate__animated animate__fadeIn" key={post.slug}>

                        <div className="blog-image">
                            <img 
                                src="../assets/img/image1.jpg"
                                alt="blog img"
                                style={{width: '1080px', height: '500px'}}
                            />
                        </div>

                        <div className="blog-content">

                            <h3 className="blog-title">{post.title}</h3>

                            <div className="short-description">
                            {post.short_desc}
                            </div>

                            <div className="read-more-button">
                                <Link to={`./blog/${post.slug}`}>Read More</Link>
                                <div></div>
                            </div>

                            <div className="blog-footer">
                                <div className="blog-info">
                                    Posted on {post.blogPostDate} by {post.author}
                                </div>
                                <div></div>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

            <aside className="blog-advanceInfo">

                <div className="searchbar-container">
                    <input 
                        type="text" 
                        placeholder="Search"
                        onChange={handleInputChange}
                        name="search"
                        value={search}
                    />
                    <button 
                        type="submit"
                    ><i className="fas fa-search"></i></button>
                </div>
                
            </aside>

        </div>
    );
}
