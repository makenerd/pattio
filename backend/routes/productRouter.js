const router = require('express').Router();
const { Product } = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/groups', async (req, res) => {
    try {
        const categories = await Product.distinct('category', {'brand.name': req.query.brand });
        res.json(categories);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/grouped', async (req, res) => {
    try {
        // const filter = {};
        let filter = {}
        if (req.query.creator) {
            filter = {'creators.id': req.query.creator};
        } else if (req.query.brand) {
            filter =  {'brand.id': req.query.brand};
        }

        const categories = await Product.distinct('category', filter);
        const groups = categories.map(async category => {
            const group = await Product.find({...filter, category: category}, 'name price thumbnail brand.name creators.username').limit(8);
            return {groupTitle: category, group: group};
        });
        const result = await Promise.all(groups);
        res.json(result);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/category/:category', async (req, res) => {
    try {
        // const searcher = {ropasbaño: 'Ropas de baño', vestidos: 'Vestidos'}[req.params.category];
        const products = await Product.find({ category: req.params.category});
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
        const { name, description, price, thumbnail, images, vars, category, brand, creators } = req.body;
        const product = new Product({name, description, price, thumbnail, images, vars, category, brand, creators});
        await product.save();
        res.json({
            status: 'producto creado! 😇'
        });
    } catch(err) {res.json('Error! 😭', err)}
});


module.exports = router;

// ================

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

// for (let i = 0; i < 100; i++) {
//     Product.insertMany(
//         [
//             {
//                 name: "Nombre de prenda",
//                 description: "Este me encanta su elegancia",
//                 price: 99.99,
//                 thumbnail: randomImg(),
//                 images: [randomImg(), randomImg(), randomImg()],
//                 vars: ["Rojo", "Negro", "Blanco"],
//                 category: category_list[randomNum(9)],
//                 brand: brand_list[randomNum(7)],
//                 creators: creator_list[randomNum(3)]
//             }
//         ]);
// };
