// Libraries
import React from 'react';

// Assets
import downArrow from '../assets/icons/down-arrow.svg';
import upArrow from '../assets/icons/up-arrow.svg';
import closeIcon from '../assets/icons/close.svg';

const Button = ({ text, type, onClick }) => {
    switch (type) {
        case 'primary':
            return (
                <button type="button" className="primary-button">{text}</button>
            );

        case 'secondary':
            return (
                <button type="button" className="secondary-button" onClick={onClick}>{text}</button>
            );

        case 'submit':
            return (
                <button type="submit" className="submit-button">{text}</button>
            );

        case 'danger':
            return (
                <button type="button" className="danger-button">{text}</button>
            );

        case 'disabled':
            return (
                <button type="button" className="disabled-button" disabled>{text}</button>
            );

        case 'close':
            return (
                <div className="close-button">
                    <img src={closeIcon} alt="" className="down-arrow" />
                </div>
            );

        case 'dropdown':
            if (!onClick) {
                return (
                    <div className="dropdown-button">
                        <img src={downArrow} alt="" className="down-arrow" />
                    </div>
                );
            } else {
                return (
                    <div className="dropdown-button">
                        <img src={upArrow} alt="" className="up-arrow" />
                    </div>
                )
            }
        default:
            return null;
    }
}

export default Button;