exports.Query= {
    hello: () => {
      return "Hello Again!!";
    },
    products: (parent, {filter}, {products}) => {
      let filteredProducts = products;
//  console.log(filter.onSale);
    if(filter){
      if(filter.onSale){
        // console.log(filteredProducts)
        filteredProducts = products.filter(product=>
        product.onSale === filter.onSale
        )
      }
    }
        return filteredProducts

  
    },
    categories: (parent, args, {categories}) => {
      return categories;
    },
    category: (parent, {id}, {categories}) => {
      return categories.find((category) => category.id === id);
    },
    product: (parent, {id}, {products}) => {
      return products.find((product) => product.id === id);
    },
    reviews:(parent,args,{reviews})=>{
      return reviews
    }
  }