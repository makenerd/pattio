const mongoose = require('mongoose');
const { Schema } = mongoose;

const category_list = ['Vestidos', 'Calzado', 'Pantalones', 'Abrigos', 'Polos', 'Blusas', 'Swimwear', 'Underwear', 'Accesorios'];

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    thumbnail: String,
    images: [String],
    vars: Array, // [{model: red, sizes: {xs: 10, s:20, m:12, l:10, xl:0}, price: },...]
    category: { type: String, enum: category_list },
    // lists: [{ type: Schema.Types.ObjectId, ref: 'list' }],
    // creators: [{ type: Schema.Types.ObjectId, ref: 'creator' }],
    brand: { type: Schema.Types.ObjectId, ref: 'brand' },
}, {timestamps: true});

const listSchema =  new Schema({
    title: String,
    items: [{ type: Schema.Types.ObjectId, ref: 'product' }],
}, {timestamps: true});

// const categorySchema = new Schema({
//     name: String,
//     products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
// });

const creatorSchema = new Schema({
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    photo: String,
    lists: [listSchema]
}, {timestamps: true});

const brandSchema = new Schema({
    name: String,
    email: String,
    password: String,
    lists: [listSchema]
}, {timestamps: true});


module.exports = 
    { Product: mongoose.model('product', productSchema),
      List: mongoose.model('list', listSchema),
      Creator: mongoose.model('creator', creatorSchema),
      Brand: mongoose.model('brand', brandSchema) 
    };