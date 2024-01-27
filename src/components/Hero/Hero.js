import React from "react";
import './Hero.scss';
import friendsPic2 from '../../assets/images/friends2.png';
import Button from "../common/Button/Button";

function Hero() {

    return (
        <div className="hero">
            <img alt="diverse group of friends" className="hero__img" src={friendsPic2} />
            <span className="hero__wrapper">
                <h1>we hate commitment</h1>
                <h3>to plans, anyway. opinvite takes the pressure away from inviting everyone in your contact list and pressuring your friends for the 100th time to come take that crossfit class with you.</h3>
                <Button type="primary">learn more</Button>
            </span>
        </div>
    );
}

export default Hero;