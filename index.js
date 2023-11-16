const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const {Product} = require('./resolvers/Product');
const {Mutation} = require('./resolvers/Mutation');
const {Category} = require('./resolvers/Category');
const {Query} = require('./resolvers/Query');
const { products, categories, reviews } = require("./db");
const port = 4200;


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Product,
    Category,
    Query,
    Mutation
  },
  context:{
    products,
     categories,
     reviews
  }
});

server.listen(port).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
