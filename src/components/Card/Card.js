import React from 'react';
import './Card.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let randomImage = () => {return `https://source.unsplash.com/random/${Math.floor((Math.random() * 100) + 1)}`};

function Card(props) {
    const { image=[], 
            type="", 
            description="", 
            author="", 
            price="", 
            shipping="", 
            options=[], 
            sizes=[]
        } = props;

    const cardContainer = {squareS: "CardS", squareM: "Card", squareL: "Card", squareXL: "CardXL", circleM: "Card"}[type];

    const renderTitle = (type === "squareXL") 
        ? ( 
            <div className="CardHeaderXL">
                <div className='CardTitleXL'>{description}</div>
                <div className='CardAuthorXL'>{author}</div>
            </div> 
        ): ""  


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
    };

    const renderImage = type === "squareXL" 
        ? (
            // todo: no entra a la condición
            <div className="sliderImg">
                <Slider {...settings}>
                    {image.map((img, index) => (
                        <div className="sliderImg">
                            <div className={`CardImage ${type}`} style={{backgroundImage: `url(${image})`}}></div>
                        </div>
                        ))
                    }
                </Slider>
            </div>
        ) : (
            <div className={`card__image ${type}`} style={{backgroundImage: `url(${image})`}}>
                { ( price && ( (type === "squareM" || type === "squareL") )) ? <span className="CardPrice">${price}</span> : "" }
            </div>
        );

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