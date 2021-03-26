import React, { useContext, useEffect } from 'react'
import { PorfolioContext } from '../../Context/PorfolioContext';
import './SwitchDarkLight.scss';

export const SwitchDarkLight = () => {

    const { theme, toggleTheme } = useContext(PorfolioContext);

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <label>
            <input type="checkbox" />
            <span 
                className="check" 
                onClick={toggleTheme}
            ></span>
        </label>
    );
}
