import React, { useContext, useEffect, useState } from 'react'
import { PorfolioContext } from '../../Context/PorfolioContext';
import './ContactPage.scss';

export const ContactPage = () => {

    const { setToggleMenu } = useContext(PorfolioContext);
    
    useEffect(()=>{
        setToggleMenu(false);
    }, [setToggleMenu]);


    const [contentForm, setContentForm] = useState({
        name: '',
        company_name: '',
        email: '',
        message: ''
    });

    const {
        name,
        company_name,
        email,
        message,
    } = contentForm;

    const handleInputChange = ({target}) => {
        setContentForm({
            ...contentForm,
            [target.name]: target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className="contact-wrapper">
            <h4>Do you want to contact me?</h4>
            <div className="contact-container">
                <form 
                    method="POST"
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <div className="input-group">
                        <input 
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-group">
                        <input 
                            type="text"
                            placeholder="Company Name"
                            name="company_name"
                            value={company_name}
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-group">
                        <input 
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={ handleInputChange }
                        />
                    </div>

                    <div className="input-group">
                        <textarea
                            placeholder="Message"
                            name="message"
                            value={message}
                            onChange={ handleInputChange }
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Send"
                    />
                </form>
            </div>
        </div>
    )
}
