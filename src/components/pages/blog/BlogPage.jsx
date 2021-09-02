import React, { useContext, useEffect, useState } from 'react';
import { PorfolioContext } from '../../Context/PorfolioContext';
import { BlogPost } from './blogComponent/BlogPost';
import ReactLoading from "react-loading";

import './BlogPage.scss';

export const BlogPage = () => {

    const { blogs, setToggleMenu } = useContext(PorfolioContext);
    const [inputSearch, setInputSearch] = useState({
        search: ""
    });
    const [isBlogsLoading, setIsBlogsLoading] = useState(true);

    useEffect(() => {
        setToggleMenu(false);
        
    }, [setToggleMenu]);

    useEffect(()=>{
        console.log('Esto es el largo de blogs: ', blogs.length);
        if (blogs.length === 0){
            console.log('Estan cargando los blogs!')
            setIsBlogsLoading(true);
        }else{
            console.log('Ya se cargaron los blogs!');
            setIsBlogsLoading(false);
        }
    }, [blogs]);

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
        <>
        {isBlogsLoading 
        ? 
            <div className="loading-container">
                <ReactLoading
                    type="bars" 
                    color="#F26C4F" 
                    width={130}
                />
            </div>
        : (
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
        )}
        </>
    );
}
