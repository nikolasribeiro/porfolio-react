import React from 'react';
import { Link } from 'react-router-dom';
import { SideToggleMenu } from './SideMenu/SideToggleMenu';
import { SwitchDarkLight } from './switch/SwitchDarkLight';

export const Navbar = () => {


    return (
        <nav id="navbar">

            <div className="navbar__logo">
                <Link className='logo' to='/'> Nicolas <span id="apellido">Ribeiro</span> </Link>
            </div>
            <div className="spacer"></div>
            <div className="navbar__navigation-items">
                <ul>
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
                        <Link className='links' to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>

            <div>
                <SideToggleMenu />
            </div>
            <div>
                <SwitchDarkLight />
            </div>
        </nav>
    );
}
