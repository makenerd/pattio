import React from 'react';
import './Card.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Card(props) {
    const {image=[], type="", description="", author="", price="", shipping="", options=[], sizes=[]} = props;

    const cardContainer = {squareS: "CardS", squareM: "Card", squareL: "Card", squareXL: "CardXL", circleM: "Card"}[type];

    const renderTitle = type === "squareXL" ? 
    <div className="CardHeaderXL">
        <div className='CardTitleXL'>{description}</div>
        <div className='CardAuthorXL'>{author}</div>
    </div> : ""; 


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
    };

    const renderImage = type === "squareXL" 
        ?
            <div className="sliderImg">
                <Slider {...settings}>
                    {image.map(img => <div className="sliderImg"><div className={`CardImage ${type}`} style={{backgroundImage: `url(${img})`}}></div></div>)}
                </Slider>
            </div>
        :
        <div className={`CardImage ${type}`} style={{backgroundImage: `url(${image})`}}>
            { ( price && ( (type === "squareM" || type === "squareL") )) ? <span className="CardPrice">${price}</span> : "" }
        </div>;

    const renderDescription = {
        squareS: 
        <div className="CardDescriptionS">
            <div className='CardTitleS'>{description}</div>
            <div className='CardAuthorS'>{author}</div>
        </div>,
        squareXL:
        <div className="CardDescriptionXL">
            <div className="CardPriceXL">${price}</div>
            <div className="CardOptionsXL">{options}</div>
            <div className="CardSizesXL">{sizes}</div>
        </div>,
        default:
        <div className="CardDescription">
            <div className='CardTitle'>{description}</div>
            { author ? <div className='CardAuthor'>{author}</div> : ""}
        </div>,
    }[(type !== "squareS" && type !== "squareXL") ? "default" : type];

    return (
        <div className={cardContainer}>
            {renderTitle}
            {renderImage}
            {renderDescription}
        </div>
    );
}

export default Card;