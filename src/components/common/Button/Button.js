import React from "react";
import './Button.scss';

function Button({ children, name, type }) {
    const buttonCls = `button__${type}`;

    return (
        <button className={buttonCls}>{name || children}</button>
    );
}

export default Button;