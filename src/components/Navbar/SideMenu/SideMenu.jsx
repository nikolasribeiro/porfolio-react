import React from 'react'
import { Link } from 'react-router-dom';

import './SideMenu.scss';

export const SideMenu = () => {
    return (
        <nav className="side-menu animate__animated animate__fadeInLeft">
            <ul>
                <li>
                    <Link className='links' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='links' to='/about'>About Me</Link>
                </li>
                <li>
                    <Link className='links' to='/porfolio'>Porfolio</Link>
                </li>
                <li>
                    <Link className='links' to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link className='links' to='/contact'>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
