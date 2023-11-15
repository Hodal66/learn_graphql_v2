const {gql} = require("apollo-server");

exports.typeDefs = gql`
type Query {
  hello: String
  products: [Product!]!
  categories: [Category!]!
  category(id: ID!): Category!
  product(id: ID!): Product!
}
type Product {
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  image: String!
  onSale: Boolean!
  categoryId: String!
  category: Category
}
type Category {
  name: String!
  id: String
  product: [Product!]!
}
`;