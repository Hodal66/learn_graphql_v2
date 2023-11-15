const { products } = require("../db");

exports.Category = {
    product: (parent, args, context) => {
      const productId = parent.id;
      return products.filter((product) => product.categoryId === productId);
    },
  }