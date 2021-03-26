import React, { useContext } from 'react';
import { PorfolioContext } from '../../Context/PorfolioContext';

import './Backdrop.scss';

export const BackDrop = () => {

    const { toggleMenu, setToggleMenu } = useContext(PorfolioContext);


    return (
        <div 
            className="backdrop"
            onClick={()=> setToggleMenu(!toggleMenu)}
        >
            
        </div>
    )
}
