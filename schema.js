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
type Mutation{
  addCategory(input:AddCategoryInput!):Category!
  addProduct(input:AddProductInput!):Product!
  addReview(input:AddReviewInput!):Review!
  deleteCategory(id:ID!):Boolean!
  deleteProduct(id:ID!):Boolean!
  deleteReview(id:ID):Boolean!
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

input AddProductInput{
  id:String
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  image: String!
  onSale: Boolean!
  categoryId: String!
}

type Category {
  name: String!
  id: String
  product(filter:ProductFilterInput): [Product!]!
}
input AddCategoryInput{
  name: String!
  id: String
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
input AddReviewInput{
  date: String!
      title: String!
      comment: String!
      rating: Int!
      productId: String
}
`;