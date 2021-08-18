import React, { useContext, useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { PorfolioContext } from '../../Context/PorfolioContext';
import './PorfolioPage.scss';

export const PorfolioPage = () => {
    /*
    const { uniqueTechnologies, projects, setToggleMenu } = useContext(PorfolioContext);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        setToggleMenu(false);
    }, [setToggleMenu])

    useEffect(()=>{}, [projects]);

    const handleClick = (technologie) => {
        
        if(technologie !== 'all'){
            
            // filter by ID when user clicks on <li>
            setFilteredProjects(
                projects.filter(project => {
                    return project.technologies.split(', ').some(tech => {
                        return tech === technologie;
                    });
                })
            );
        }else{
            setFilteredProjects(projects);
        }

    }
    */
    return (
        <div style={{
            width: '100wh',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>PAGINA BAJO MANTENIMIENTO</h1>
        {/* 
        <section className="grid-layout">
            
            <div className="filter-by-technologies">

                <h4>Search By Technologies</h4>
                <p onClick={() => handleClick('all')}>Show All Projects</p>
                <ul className="list-tech">
                    {uniqueTechnologies.map(tech => 
                        <li key={tech} onClick={() => handleClick(`${tech}`)}>{tech}</li>
                    )}
                </ul>

            </div>

            <div className="list-projects">
                {filteredProjects.map(project => (

                    <div key={project.number} className={`project-wrapper animate__animated animate__fadeInLeft animate__faster`}>
                        
                        <div className="project-number">
                            <h4>{project.number}</h4>
                        </div>

                        <div className="project-header">
                            <img 
                                src={project.image_project}
                                alt={project.name_project}
                            />
                        </div>

                        <div className="project-container">

                            <div className="project-body">
                                <h2>{project.name_project}</h2>
                                <p className="project-description">
                                    {project.short_description}
                                </p>

                                <div className="buttons">
                                    <Link to={`./porfolio/${project.number}`}>Read More</Link>
                                    <a 
                                        href={project.source_code} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >Source Code</a>
                                </div>
                            </div>

                            <div className="technologies">
                                {   
                                    project.technologies.split(', ').map(tech => (
                                        <p key={tech}>{tech}</p>
                                    ))
                                }
                            </div>

                        </div>

                    </div>

                ))}
            </div>
        </section>
        */}
        </div>
    );
}

React.memo(PorfolioPage);