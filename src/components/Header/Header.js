import React from "react";
import '../Header/Header.scss';
import Button from "../common/Button/Button";

function Header() {
    return (
        <header className="header">
            <ul className="header__nav">
                <li className="squiggle">home</li>
                <li className="squiggle">faq</li>
            </ul>
            <p className="header__logo">opinvite</p>
            <Button name="login" type="rainbow"/>
        </header>
    );
}

export default Header;