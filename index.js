const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const {Product} = require('./resolvers/Product');
const {Category} = require('./resolvers/Category');
const {Query} = require('./resolvers/Query');
const port = 4200;

const resolvers = {
Product,
Category,
Query
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
