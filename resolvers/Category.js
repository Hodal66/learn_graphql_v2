exports.Category = {
    product: ({id:productId}, args, {products}) => {
      return products.filter((product) => product.categoryId === productId);
    },
  }