const {gql} = require("apollo-server");

exports.typeDefs = gql`
type Query {
  hello: String
  products(filter:ProductFilterInput): [Product!]!
  categories: [Category!]!
  category(id: ID!): Category!
  product(id: ID!): Product!
  reviews:[Review!]!
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
  reviews:[Review!]!
}
type Category {
  name: String!
  id: String
  product(filter:ProductFilterInput): [Product!]!
}
type Review{
      id:ID!
      date: String!
      title: String!
      comment: String!
      rating: Int!
      productId: String
}
input ProductFilterInput{
  onSale:Boolean
  avgRating:Int
}
`;