const { products,categories} = require("../db");

exports.Query= {
    hello: () => {
      return "Hello Again!!";
    },
    products: (parent, args, context) => {
      return products;
    },
    categories: (parent, args, context) => {
      return categories;
    },
    category: (parent, args, context) => {
      const categoryId = args.id;
      return categories.find((category) => category.id === categoryId);
    },
    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id === id);
    },
  }