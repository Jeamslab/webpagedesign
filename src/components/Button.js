import React from 'react';
import "./Button.css";
import {Link} from "react-router-dom";


const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/sign-up"  className="btn-mobile">
            <button className={
                    `btn ${checkButtonStyle} ${checkButtonSize}`
                }
                onClick={onClick}
                type={type}>
                {children} </button>
            
        </Link>
        
        
    )
    
};

export const Button2 = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="//www.youtube.com/channel/UCvHjBohzRG_gnYDdA43qwMA/videos" target="_blank" className="btn-mobile">
            <button className={
                    `btn ${checkButtonStyle} ${checkButtonSize}`
                }
                onClick={onClick}
                type={type}>
                {children} </button>
            
        </Link>
        
        
    )
    
};



export const Button3 = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/sign-in"  className="btn-mobile">
            <button className={
                    `btn ${checkButtonStyle} ${checkButtonSize}`
                }
                onClick={onClick}
                type={type}>
                {children} </button>
            
        </Link>
        
        
    )
 };

 export const Button4 = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/"  className="btn-mobile">
            <button className={
                    `btn ${checkButtonStyle} ${checkButtonSize}`
                }
                onClick={onClick}
                type={type}>
                {children} </button>
            
        </Link>
        
        
    )
 };