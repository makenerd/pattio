import React, { useState } from 'react';
import './ProductCard.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Options from '../Options/Options';
import Counter from '../Counter/Counter';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Link } from "react-router-dom";

function ProductCard(props) {
    // const image = props.thumbnail;
    // const description = props.name;
    // const author = props.brand ? props.brand.name : '';
    // const price = props.price;
    // const type = props.cardType;
    // const images = props.images;
    // const cardLink = props.cardLink ? props.cardLink : '/'

    const description = 'Bikini Ibiza';
    const author = 'Capittana';
    const type = "CardXL";
    const price = 19.99;
    const image = [
        "https://source.unsplash.com/random/1", 
        "https://source.unsplash.com/random/2", 
        "https://source.unsplash.com/random/3", 
        "https://source.unsplash.com/random/4", 
        "https://source.unsplash.com/random/5", 
        "https://source.unsplash.com/random/6"
    ];

    const cardContainer = {squareS: "CardS", squareM: "Card", squareL: "Card", squareXL: "CardXL", circleM: "Card"}[type];
    
    const [model, setModel] = useState('');
    const [size, setSize] = useState('');
    const [count, setCount] = useState(1);
    const dispatchCart = useDispatch();


    const renderTitle = type === "squareXL" ?
    <div className="CardHeaderXL">
        <div className='CardTitleXL'>{description}</div>
        <div className='CardAuthorXL'>{author}</div>
    </div> : null; 

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
    };

    const renderImage = type === "squareXL" ?
            <div className="sliderImg">
                <Slider {...settings}>
                    {image.map(img => <div className="slidersImg" key={uuid()}><div className={`CardImage ${type}`} style={{backgroundImage: `url(${img})`}}></div></div>)}
                </Slider>
            </div>
        :
        <div className={`CardImage ${type}`} style={{backgroundImage: `url(${image})`}}>
            { ( price && ( (type === "squareM" || type === "squareL") )) ? <span className="CardPrice">${price}</span> : null }
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
            <Options title='Modelos' options={['Negro', 'Blanco', 'Rojo', 'Azul']} setOption={setModel}/>
            <Options title='Tallas' options={['XS', 'S', 'M', 'L', 'XL']} setOption={setSize}/>
            <Counter count={count} setCount={setCount} dispatchCart={dispatchCart} itemsToCart={{description, model, size, count}}/>
        </div>,
        default:
        <div className="CardDescription">
            <div className='CardTitle'>{description}</div>
            { author && <div className='CardAuthor'>{author}</div> }
        </div>,
    }[(type !== "squareS" && type !== "squareXL") ? "default" : type]; 

    return (
        <Link to='/'>
            <div className={cardContainer} key={uuid()}>
                {renderTitle}
                {renderImage}
                {renderDescription}
            </div>
        </Link>
    );
}

export default ProductCard;