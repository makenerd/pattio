const router = require('express').Router();
const { Product } = require('../models/models');

Product.insertMany(
[
    {
        name: "Vestido Marion",
        description: "Este me encanta su elegancia",
        price: 99.99,
        thumbnail: "https://source.unsplash.com/random/1",
        images: ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3"],
        vars: ["Rojo", "Negro", "Blanco"],
        category: "Vestidos",
        brand: "5dbe491c5b0f361a5fe90f5a"
    },
    {
        name: "Vestido Marion",
        description: "Este me encanta su elegancia",
        price: 99.99,
        thumbnail: "https://source.unsplash.com/random/1",
        images: ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3"],
        vars: ["Rojo", "Negro", "Blanco"],
        category: "Vestidos",
        brand: "5dbe491c5b0f361a5fe90f5a"
    },
    {
        name: "Vestido Marion",
        description: "Este me encanta su elegancia",
        price: 99.99,
        thumbnail: "https://source.unsplash.com/random/1",
        images: ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3"],
        vars: ["Rojo", "Negro", "Blanco"],
        category: "Vestidos",
        brand: "5dbe491c5b0f361a5fe90f5a"
    },
    {
        name: "Vestido Marion",
        description: "Este me encanta su elegancia",
        price: 99.99,
        thumbnail: "https://source.unsplash.com/random/1",
        images: ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3"],
        vars: ["Rojo", "Negro", "Blanco"],
        category: "Vestidos",
        brand: "5dbe491c5b0f361a5fe90f5a"
    },
    {
        name: "Vestido Marion",
        description: "Este me encanta su elegancia",
        price: 99.99,
        thumbnail: "https://source.unsplash.com/random/1",
        images: ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3"],
        vars: ["Rojo", "Negro", "Blanco"],
        category: "Vestidos",
        brand: "5dbe491c5b0f361a5fe90f5a"
    },
    {
        name: "Vestido Marion",
        description: "Este me encanta su elegancia",
        price: 99.99,
        thumbnail: "https://source.unsplash.com/random/1",
        images: ["https://source.unsplash.com/random/1", "https://source.unsplash.com/random/2", "https://source.unsplash.com/random/3"],
        vars: ["Rojo", "Negro", "Blanco"],
        category: "Vestidos",
        brand: "5dbe491c5b0f361a5fe90f5a"
    }
]);