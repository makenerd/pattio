const router = require('express').Router();
const { Creator } = require('../models/models');

router.get('/', async (req, res) => {
    try {
        const creators = await Creator.find();
        res.json(creators);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/:id', async (req, res) => {
    try {
        const creator = await Creator.findById(req.params.id);
        res.json(creator);
    } catch(err) {res.json('Error! 😭', err)}
});

router.post('/', async (req, res) => {
    try {
        const { username, first_name, last_name, email, password, photo, products, lists } = req.body;
        const creator = new Creator({ username, first_name, last_name, email, password, photo, products, lists });
        await creator.save();
        res.json({
            status: 'creador creado! 😇',
            detalle: creator
        });
    } catch(err) {res.json('Error! 😭', err)}
});


module.exports = router;

