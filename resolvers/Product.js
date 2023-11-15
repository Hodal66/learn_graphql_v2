const { categories } = require("../db");

exports.Product={
    category: (parent, args, context) => {
      console.log("This is parent of product id: ", parent.id);
      const categoryParentId = parent.categoryId;
      return categories.find((category) => category.id === categoryParentId);
    },
  }