const router = require('express').Router();
const User = require('../models/userModel');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch(err) {res.json('Error! 😭', err)}
});

router.post('/', async (req, res) => {
    try {
        const { username, first_name, last_name, email } = req.body;
        const user = new User({username, first_name, last_name, email,});
        await user.save();
        res.json({
            status: 'usuario creado! 😇'
        });
    } catch(err) {res.json('Error! 😭', err)}
});


module.exports = router;