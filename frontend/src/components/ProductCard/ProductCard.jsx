import React, { useState, useEffect } from 'react';
import './ProductCard.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Options from '../Options/Options';
import Counter from '../Counter/Counter';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductCard(props) {
    const productId = props.match.params.product;
    // const description = 'Bikini Ibiza';
    // const author = 'Capittana';
    // const type = "CardXL";
    // const price = 19.99;
    // const image = [
    //     "https://source.unsplash.com/random/1", 
    //     "https://source.unsplash.com/random/2", 
    //     "https://source.unsplash.com/random/3", 
    //     "https://source.unsplash.com/random/4", 
    //     "https://source.unsplash.com/random/5", 
    //     "https://source.unsplash.com/random/6"
    // ];
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [brandId, setBrandId] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [images, setImages] = useState([])
    const [description, setDescription] = useState('')

    const [model, setModel] = useState('');
    const [size, setSize] = useState('');
    const [count, setCount] = useState(1);
    const dispatchCart = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:8000/api/products/single/${productId}`);
            setName(result.data.name);
            setBrand(result.data.brand.name);
            setBrandId(result.data.brand.id);
            setPrice(result.data.price);
            setThumbnail(result.data.thumbnail);
            setImages(result.data.images);
            setDescription(result.data.description);
            console.log(name, brand, price, images, description);
        };
        fetchData();
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
    };

    return (
        <div className='CardXL' key={uuid()}>
            <div className="CardHeaderXL">
                <div className='CardTitleXL'>{name}</div>
                <div className='CardAuthorXL'>{brand}</div>
            </div>
            <div className="sliderImg">
                <Slider {...settings}>
                    {images.map(img => <div className="slidersImg" key={uuid()}><div className='CardImage squareXL' style={{backgroundImage: `url(${img})`}}></div></div>)}
                </Slider>
            </div>
            <div className="CardDescriptionXL">
                <div className="CardPriceXL">${price}</div>
                <Options title='Modelos' options={['Negro', 'Blanco', 'Rojo', 'Azul']} setOption={setModel}/>
                <Options title='Tallas' options={['XS', 'S', 'M', 'L', 'XL']} setOption={setSize}/>
                <Counter count={count} setCount={setCount} dispatchCart={dispatchCart} itemsToCart={{productId, name, thumbnail, brand, brandId, model, size, count, price}}/>
            </div>
        </div>
    );
}

export default ProductCard;