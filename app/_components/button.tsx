import React from "react"

interface ButtonProps {
    isPrimary?: boolean;
    text?: string;
    children: React.ReactNode;
    onClick?: any;
    counter?: number;
}

const Button = ({isPrimary = false, text = 'Default', children, onClick, counter}) => {

    const buttonStyle = {
        backgroundColor: isPrimary ? 'blue' : 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '20px'
    }

    return (<><button onClick={onClick} style={buttonStyle}>{text} {counter && `total clicked ${counter}`}</button>{children}</>)
}

export default Button;


// () => handleClicked(text)