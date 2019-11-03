require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Index
app.use(express.static('../frontend/public'));

// Routes
app.use('/api/creators', require('./routes/creatorRouter'));
app.use('/api/products', require('./routes/productRouter'));
app.use('/api/brands', require('./routes/brandRouter'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Conectando a MongoDB, yeee!😱'))
    .catch(err => console.log('Error, OH NO! ', err));
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// const connection = mongoose.connection;
// connection.once('open', () => { console.log('Conectado a Mongo Atlas! 😱')});

app.listen(port, () => console.log(`Running on port ${port}`));