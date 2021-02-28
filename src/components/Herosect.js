import React from "react";
import "../App.css"
import { Button } from "./Button";
import {Button2} from "./Button"
import "./Herosect.css";
import Video from "../videos/video-2.mp4"


function Herosect() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted />
            <h1>The Start Of A New Journey</h1>
            <p>Are you ready?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button2 className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Watch Our Intro Video<i className="far
                                    fa-play-circle"/>
                </Button2>
            </div>
        </div>
    );
}

export default Herosect;
