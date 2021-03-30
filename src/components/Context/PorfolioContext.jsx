import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const PorfolioContext = createContext();

export const PorfolioProvider = ({children}) => {

    // Get all the projects and puts inside the porfolio
    // context
    const [projects, setProjects] = useState([]);

    // Get all the blogs posted on the site
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/v1/porfolio')
         .then(res => {
             const projectsApi = res.data;
             setProjects(projectsApi);
         })
    }, [setProjects]);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/v1/blogs')
        .then(res => {
            const blogsApi = res.data;
            setBlogs(blogsApi);
        })
    },[setBlogs]);
    
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
    let temp;

    projects.map(project => {
        temp = project.technologies.split(', ')
        return temp.map(tech => allTechnologies.push(tech))
    });

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