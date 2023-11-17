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
  updateCategory(id:ID, input:UpdateCategoryInput):Category
  updateProduct(id:ID, input:UpdateProductInput):Product
  updateReview(id:ID, input:UpdateReviewInput):Review

 }
type Product {
  id:ID!
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
input UpdateProductInput{
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  image: String!
  onSale: Boolean!
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

input UpdateCategoryInput{
  name:String!
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

input UpdateReviewInput{
  date: String
      title: String
      comment: String
      rating: Int
      productId: String
}
`;