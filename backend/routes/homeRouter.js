const router = require('express').Router();
const { Creator, Brand } = require('../models/models');

let randomImg = () => {return `https://source.unsplash.com/random/${Math.floor((Math.random() * 100) + 1)}`};

router.get('/lists', (req, res) => {
    try {
        const lists = [
            {_id: 1123,name: 'Bikinis Chic', thumbnail: randomImg()}, 
            {_id: 2123,name: 'Vestidos Rua', thumbnail: randomImg()},
            {_id: 3123,name: 'Accesorios Invierno', thumbnail: randomImg()}, 
            {_id: 4123,name: 'Abrigos Animal Print', thumbnail: randomImg()}, 
            {_id: 5123,name: 'Polos Luau', thumbnail: randomImg()}, 
            {_id: 6123,name: 'Blusas de oficina', thumbnail: randomImg()},
            {_id: 7123,name: 'Swimwear Hawai', thumbnail: randomImg()},
            {_id: 8123,name: 'Underwear Sex Symbol', thumbnail: randomImg()}];
        const result = {groupTitle: 'Listas', group: lists}
        res.json(result);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/creators', async (req, res) => {
    try {
        const creators = await Creator.find({}, 'name thumbnail').limit(8);
        const result = {groupTitle: 'Creadores', group: creators}
        res.json(result);
    } catch(err) {res.json('Error! 😭', err)}
});

router.get('/brands', async (req, res) => {
    try {
        const brands = await Brand.find({}, 'name thumbnail').limit(8);
        const result = {groupTitle: 'Marcas', group: brands}
        res.json(result);
    } catch(err) {res.json('Error! 😭', err)}
});



router.get('/categories', (req, res) => {
    try {
        const categories = [
            {name: 'Vestidos', thumbnail: randomImg(), _id: 'Vestidos'}, 
            {name: 'Calzado', thumbnail: randomImg(), _id: 'Calzado'},
            {name: 'Pantalones', thumbnail: randomImg(), _id: 'Pantalones'}, 
            {name: 'Abrigos', thumbnail: randomImg(), _id: 'Abrigos'}, 
            {name: 'Polos', thumbnail: randomImg(), _id: 'Polos'}, 
            {name: 'Blusas', thumbnail: randomImg(), _id: 'Blusas'},
            {name: 'Swimwear', thumbnail: randomImg(), _id: 'Swimwear'},
            {name: 'Underwear', thumbnail: randomImg(), _id: 'Underwear'},
            {name: 'Accesorios', thumbnail: randomImg(), _id: 'Accesorios'}];
        const result = {groupTitle: 'Categorias', group: categories}
        res.json(result);
    } catch(err) {res.json('Error! 😭', err)}
});

module.exports = router;