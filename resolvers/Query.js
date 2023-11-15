exports.Query= {
    hello: () => {
      return "Hello Again!!";
    },
    products: (parent, args, {products}) => {
      return products;
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