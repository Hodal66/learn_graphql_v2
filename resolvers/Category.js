exports.Category = {
    product: ({id:productId}, {filter}, {products}) => {
      let filteredCategoryProducts = products.filter((product) => product.categoryId === productId);
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