exports.Category = {
    product: ({id:productId}, {filter}, {db}) => {
      let filteredCategoryProducts = db.products.filter((product) => product.categoryId === productId);
      if(filter){
        if(filter.onSale === true){
        filteredCategoryProducts = filteredCategoryProducts.filter(product=>{
          return product.onSale
        })
      }
      }
      return filteredCategoryProducts;
    },
  }