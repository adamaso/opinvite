import React from "react";
import './Button.scss';

function Button({ name, type }) {
    const buttonCls = `button_${type}`;

    return (
        <button className={buttonCls}>{name}</button>
    );
}

export default Button;