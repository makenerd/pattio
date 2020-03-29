const { Product } = require('../models/models');

const resolvers = {
    Query: {
        hello: () => 'Hellooooo :D',
        products: async () => { return await Product.find({}, 'name price thumbnail images category')}
    }
} 

export default resolvers;