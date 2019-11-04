const router = require('express').Router();
const { Product } = require('./models/models');

const creator_list = [
    { id : "5dbe55eccf3bb31df650dc5a", username : "Palodirtyano" },
    { id : "5dbe5613cf3bb31df650dc5b", username : "Mafer Neyra" },
    { id : "5dbe562fcf3bb31df650dc5c", username : "Ximena Moral" }
];

const brand_list = [
    { id : "5dbe491c5b0f361a5fe90f5a", name : "Naga" },
    { id : "5dbe4a413d02571a951a9c2c", name : "Capittana" },
    { id : "5dbe4a523d02571a951a9c2d", name : "Late La Tela" },
    { id : "5dbe4a673d02571a951a9c2e", name : "Afit" },
    { id : "5dbe4aaf3d02571a951a9c2f", name : "Camote Soup" },
    { id : "5dbe4acb3d02571a951a9c30", name : "Vivi Wu" },
    { id : "5dbe4ae53d02571a951a9c31", name : "Peruvian Flake" }
];

const category_list = ['Vestidos', 'Calzado', 'Pantalones', 'Abrigos', 'Polos', 'Blusas', 'Swimwear', 'Underwear', 'Accesorios']

const randomImg = () => {return `https://source.unsplash.com/random/${Math.floor((Math.random() * 100) + 1)}`};
const randomNum = (num) => Math.floor((Math.random() * num))


    Product.insertMany(
        [
            {
                name: "Nombre de prenda",
                description: "Este me encanta su elegancia",
                price: 99.99,
                thumbnail: randomImg(),
                images: [randomImg(), randomImg(), randomImg()],
                vars: ["Rojo", "Negro", "Blanco"],
                category: category_list[randomNum(9)],
                brand: brand_list[randomNum(7)],
                creators: [creator_list[randomNum(3)]]
            },
            {
                name: "Nombre de prenda",
                description: "Este me encanta su elegancia",
                price: 99.99,
                thumbnail: randomImg(),
                images: [randomImg(), randomImg(), randomImg()],
                vars: ["Rojo", "Negro", "Blanco"],
                category: category_list[randomNum(9)],
                brand: brand_list[randomNum(7)],
                creators: [creator_list[randomNum(3)]]
            },
            {
                name: "Nombre de prenda",
                description: "Este me encanta su elegancia",
                price: 99.99,
                thumbnail: randomImg(),
                images: [randomImg(), randomImg(), randomImg()],
                vars: ["Rojo", "Negro", "Blanco"],
                category: category_list[randomNum(9)],
                brand: brand_list[randomNum(7)],
                creators: [creator_list[randomNum(3)]]
            }
        ]);

