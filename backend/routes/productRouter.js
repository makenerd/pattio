const router = require('express').Router();
const { Product } = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/category/:category', async (req, res) => {
    try {
        const searcher = {ropasbaño: 'Ropas de baño', vestidos: 'Vestidos'}[req.params.category];
        const products = await Product.find({ category: searcher});
        res.json(products);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch(err) {res.json('Error! 😭', err)}
});

router.post('/', async (req, res) => {
    try {
        const { name, description, price, thumbnail, images, vars, category, brand } = req.body;
        const product = new Product({name, description, price, thumbnail, images, vars, category, brand});
        await product.save();
        res.json({
            status: 'producto creado! 😇'
        });
    } catch(err) {res.json('Error! 😭', err)}
});


module.exports = router;

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

