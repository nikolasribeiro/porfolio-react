import React, { useContext } from 'react'
import { PorfolioContext } from '../../Context/PorfolioContext';
import './SideToggleMenu.scss';

export const SideToggleMenu = () => {

    const { toggleMenu ,setToggleMenu } = useContext(PorfolioContext);


    return (
        <button 
            className="toggle-button" 
            onClick={()=> setToggleMenu(!toggleMenu)}
        >
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    )
}
