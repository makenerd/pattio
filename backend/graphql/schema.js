import  { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server';
import resolvers from './resolvers';

export const typeDefs = gql`
    type Query {
        hello: String
        products: [Product]
    }
    type Product {
        _id: ID
        name: String
        price: Float
        thumbnail: String,
        images: [String]
        category: String
    } 
`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers : resolvers
})