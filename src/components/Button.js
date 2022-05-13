import React from "react";

const Button = (props) => {

    const {buttonText, className} = props;
    return (
        <button className={`custom_btn ${className?className:""}`}>{buttonText}</button>
    );
};

export default Button;
// To print any variable/props/state value inside JSX it should be surrounded wit {} (curly braces)