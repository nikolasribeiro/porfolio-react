import React from 'react';

import './AboutPage.scss';

export const AboutPage = () => {
    return (
        <div className="wrapper">
            <div className="about-container animate__animated animate__fadeIn">
                <h3
                    className="animate__animated animate__fadeIn"
                >About me</h3>
                
                <div className="about-content">
                    
                    <div className="text animate__animated animate__fadeIn">
                       <span
                        className="first-letter"
                       >s</span>elf-taugh, Python programmer, React Developer
                       and future Rust Developer, Im Nicolas Ribeiro. 
                       Welcome to my Website!
                       <br/>
                       <br/>
                       I have knowledge on fullstack software development
                       with ReactJS for the frontend and Django for the
                       backend.
                       <br/>
                       <br/>
                       My skill list:
                       <ul>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn">HTML5</li>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn animate__delay-1s">CSS3</li>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn animate__delay-2s">Javascript</li>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn animate__delay-3s">ReactJS</li>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn animate__delay-4s">Python</li>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn animate__delay-5s">Django</li>
                           <li className="list-skill animate__faster animate__animated animate__fadeIn animate__delay-5s">Heroku</li>
                       </ul>

                       
                    </div>

                    <div className="image-and-social-links">

                        <div className="circle-image animate__animated animate__fadeIn animate__delay-1s">
                            <img 
                            src="../assets/img/captura_perfil_alpha.png"
                            alt="Nicolas Ribeiro"
                            className="image-resize"
                            />
                        </div>
                        
                        <div className="social-networks animate__animated animate__fadeIn animate__delay-1s">
                            <h5>Lets Connect each other!</h5>
                            <ul>
                                <li 
                                    className="animate__animated animate__fadeIn animate__delay-1s"
                                ><a rel="noreferrer" href="mailto:nikolas.sebastian.ribeiro@gmail.com" target="_blank" > <i className="fas fa-at"></i> Email </a></li>
                                <li 
                                    className="animate__animated animate__fadeIn animate__delay-2s"
                                ><a rel="noreferrer" href="https://www.github.com/nikolasribeiro" target="_blank" > <i className="fab fa-github"></i> GitHub </a></li>
                                <li 
                                    className="animate__animated animate__fadeIn animate__delay-3s"
                                ><a rel="noreferrer" href="https://www.linkedin.com/in/nicolas-sebastian-ribeiro/" target="_blank" > <i className="fab fa-linkedin"></i> LinkedIn </a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
