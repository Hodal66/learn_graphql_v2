const { reviews } = require("../db");

exports.Query= {
    hello: () => {
      return "Hello Again!!";
    },
    products: (parent, {filter}, {db}) => {
      let filteredProducts = db.products;
//  console.log(filter.onSale);
    if(filter){
      let {onSale,avgRating} = filter
      if(onSale){
        // console.log(filteredProducts)
        filteredProducts = products.filter(product=>
        product.onSale === filter.onSale
        )
      }
      if([1,2,3,4,5].includes(avgRating)){
        let sumRating = 0;
        let numberOfReview = 0;
        filteredProducts = filteredProducts.filter(product=>{
        reviews.forEach(review=>{
          if(review.productId === product.id){
            sumRating += review.rating;
            numberOfReview++;
          }
        });
        const avgProductRating = sumRating / numberOfReview;

        return avgProductRating >= avgRating;
      })
      }
    }
        return filteredProducts

  
    },
    categories: (parent, args, {db}) => {
      return db.categories;
    },
    category: (parent, {id}, {db}) => {
      return db.categories.find((category) => category.id === id);
    },
    product: (parent, {id}, {db}) => {
      return db.products.find((product) => product.id === id);
    },
    reviews:(parent,args,{db})=>{
      return db.reviews
    }
  }