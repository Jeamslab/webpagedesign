import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import Img from "../images/img-7.jpg"
import Img2 from "../images/memento.jpg"
import Img3 from "../images/red.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out Amazing Stuff</h1>
            <div className="cards__container"></div>
            <div className="cards__wrapper"></div>
            <ul className="cards__items"> 
            <CardItem 
            src={Img}
            text="Explore Our Courses"
            label="Services"
            path="/services"
            /> 
            <CardItem 
            src={Img2}
            text="Explore Our Apps"
            label="Products"
            path="/products"
            /> 
            <CardItem 
            src={Img3}
            text="Socialize With Everyone"
            label="Social"
            path="/forum"
            /> 
            </ul>
        </div>
    )
}

export default Cards
