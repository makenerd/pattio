const router = require('express').Router();
const { Creator, Brand } = require('../models/models');

let randomImg = () => {return `https://source.unsplash.com/random/${Math.floor((Math.random() * 100) + 1)}`};

router.get('/lists', (req, res) => {
    try {
        const lists = [
            {name: 'Bikinis Chic', thumbnail: randomImg()}, 
            {name: 'Vestidos Rua', thumbnail: randomImg()},
            {name: 'Accesorios Invierno', thumbnail: randomImg()}, 
            {name: 'Abrigos Animal Print', thumbnail: randomImg()}, 
            {name: 'Polos Luau', thumbnail: randomImg()}, 
            {name: 'Blusas de oficina', thumbnail: randomImg()},
            {name: 'Swimwear Hawai', thumbnail: randomImg()},
            {name: 'Underwear Sex Symbol', thumbnail: randomImg()}];
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
            {name: 'Vestidos', thumbnail: randomImg()}, 
            {name: 'Calzado', thumbnail: randomImg()},
            {name: 'Pantalones', thumbnail: randomImg()}, 
            {name: 'Abrigos', thumbnail: randomImg()}, 
            {name: 'Polos', thumbnail: randomImg()}, 
            {name: 'Blusas', thumbnail: randomImg()},
            {name: 'Swimwear', thumbnail: randomImg()},
            {name: 'Underwear', thumbnail: randomImg()},
            {name: 'Accesorios', thumbnail: randomImg()}];
        const result = {groupTitle: 'Categorias', group: categories}
        res.json(result);
    } catch(err) {res.json('Error! 😭', err)}
});

module.exports = router;