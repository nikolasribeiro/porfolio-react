import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { PorfolioContext } from '../../../Context/PorfolioContext';
import './PorfolioDetail.scss';
import { Markup } from 'interweave';

export const PorfolioDetail = () => {

    const { projects, setToggleMenu } = useContext(PorfolioContext);

    useEffect(() => {
        setToggleMenu(false);
    }, [setToggleMenu])

    const getProjectById = (number) => {
        return projects.find(project => project.number === number);
    }


    const { number } = useParams();
    const project = getProjectById(parseInt(number));

    if(!project){
        return <Redirect to="/porfolio" />;
    }

    const {
        name_project,
        long_description,
        technologies,
        image_project
    } = project;

    return (
        <div className="project-detail-container">

            <div className="project-explain">

                <div className="project-header">
                    <h1>Project: <span className="name-project">{name_project}</span></h1>
                    <img 
                        src={image_project}
                        alt={`project ${name_project}`}
                    />
                </div>
                <div className="explain-container">
                <Markup content={long_description}/>
                </div>
            
            </div>
            
            <div className="project-technologies">
                <h4>Technologies Used for this project</h4>
                <ul>
                    {
                        technologies.split(', ').map(tech => (
                            <li key={tech}>{tech}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
