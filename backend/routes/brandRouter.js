const router = require('express').Router();
const { Brand } = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch(err) {res.json('Error! 😭', err)}
});


router.get('/title/:id', async (req, res) => {
    try {
        const brand = await Brand.findOne({_id: req.params.id}, 'name');
        res.json(brand);
    } catch(err) {res.json('Error! 😭', err)}
});


router.get('/:id', async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        res.json(brand);
    } catch(err) {res.json('Error! 😭', err)}
});

router.post('/', async (req, res) => {
    try {
        const { name, email, password, products, lists } = req.body;
        const brand = new Brand({ name, email, password, products, lists });
        await brand.save();
        res.json({
            status: 'marca creada! 😇',
            detalle: brand
        });
    } catch(err) {res.json('Error! 😭', err)}
});


module.exports = router;

