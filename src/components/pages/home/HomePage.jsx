import React, { useContext, useEffect } from 'react';

import './HomePage.scss';

// Static assets
import { Link } from 'react-router-dom';
import { PorfolioContext } from '../../Context/PorfolioContext';

export const HomePage = () => {

    const { setToggleMenu } = useContext(PorfolioContext);

    useEffect(()=>{
        
        setToggleMenu(false);

    }, [setToggleMenu]);

    return (
        <>
            <div className="home-container animate__animated animate__fadeInUp">
                <div className="image-container animate__animated animate__fadeInUp animate__delay-1s animate_fast">
                    <img 
                        src="../assets/img/captura_perfil_alpha.png"
                        alt="Nicolas Ribeiro"
                        id="image"
                    />
                    <div className="main-description animate__animated animate__fadeInUp animate__delay-2s animate_fast">
                        <h1>Nicolas Ribeiro</h1>
                        <h2>Software Developer</h2>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <a    className="link-to-social animate__animated animate__fadeInLeft animate__delay-1s animate_fast"  target="_blank" rel="noreferrer" href="https://www.github.com/nikolasribeiro">GitHub</a>
                <Link className="link-to-social animate__animated animate__fadeInLeft animate__delay-2s animate_fast"  to="/porfolio">Go to Porfolio</Link>
                <a    className="link-to-social animate__animated animate__fadeInLeft animate__delay-3s animate_fast"  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nicolas-sebastian-ribeiro/">LinkedIn</a>
            </div>
        </>
    );
}
