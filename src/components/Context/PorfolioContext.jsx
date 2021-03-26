import { createContext, useState } from 'react';
import { blogPost } from '../../data/BlogPosts';
import { listProjects } from '../../data/ListProjects';

export const PorfolioContext = createContext();

export const PorfolioProvider = ({children}) => {

    // Get all the projects and puts inside the porfolio
    // context
    const [projects, setProjects] = useState(listProjects);
    
    
    // Get all the blogs posted on the site
    const [blogs, setBlogs] = useState(blogPost);
    
    
    
    // toggle variable for display navbar
    const [toggleMenu, setToggleMenu] = useState(false);

    // toggle between darktheme and lighttheme
    const [theme, setTheme] = useState('light');

    // function that toggle the theme
    const toggleTheme = () => {

        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }

    }

    // Get the unique technologies that i used
    const allTechnologies = [];

    projects.map(project => (
        project.technologies.map(tech => allTechnologies.push(tech))
    ));
    let uniqueTechnologies = [];
    uniqueTechnologies = [...new Set(allTechnologies)];

    return (
        <PorfolioContext.Provider
            value={{
                toggleMenu,
                theme,
                projects,
                blogs,
                
                uniqueTechnologies,

                setToggleMenu,
                toggleTheme,
                setProjects,
                setBlogs
            }}
        >
            { children }
        </PorfolioContext.Provider>
    );

};