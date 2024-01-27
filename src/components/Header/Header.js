import React from "react";
import '../Header/Header.scss';
import RainbowButton from "../Button/Button";

function Header() {
    return (
        <header className="header">
            <p className="header__logo">opinvite</p>
            <RainbowButton name="login" type="rainbow"/>
        </header>
    );
}

export default Header;