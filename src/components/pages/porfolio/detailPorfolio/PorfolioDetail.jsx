import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { getProjectById } from '../../../../selectors/getProjectById';
import { PorfolioContext } from '../../../Context/PorfolioContext';
import './PorfolioDetail.scss';


export const PorfolioDetail = () => {

    const { setToggleMenu } = useContext(PorfolioContext);

    useEffect(() => {
        setToggleMenu(false);
    }, [setToggleMenu])

    const { number } = useParams();
    const project = getProjectById(number);

    if(!project){
        return <Redirect to="/porfolio" />;
    }

    const {
        title,
        description,
        technologies,
        img
    } = project;

    return (
        <div className="project-detail-container">

            <div className="project-explain">

                <div className="project-header">
                    <h1>Project: <span className="name-project">{title}</span></h1>
                    <img 
                        src={`../assets/img/${img}.png`}
                        alt={`project ${title}`}
                    />
                </div>
                <div className="explain-container">
                    {description}
                </div>
            
            </div>
            
            <div className="project-technologies">
                <h4>Technologies Used for this project</h4>
                <ul>
                    {
                        technologies.map(tech => (
                            <li>{tech}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
