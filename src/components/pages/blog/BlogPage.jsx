import React, { useContext, useEffect, useState } from 'react';
import { PorfolioContext } from '../../Context/PorfolioContext';
import { BlogPost } from './blogComponent/BlogPost';

import './BlogPage.scss';

export const BlogPage = () => {

    const { blogs, setToggleMenu } = useContext(PorfolioContext);

    useEffect(() => {
        setToggleMenu(false);
    }, [setToggleMenu]);

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

                {filteredBlogs.reverse().map(post => (
                    <BlogPost post={post} key={post.id}/>
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
