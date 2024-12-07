export const productFilter = (product,{Sports, Formal, Sneaker, Casual, nike, puma, reebok, braton, sparky, aadi, asian, rating}) => {
    let categoryFilteredProduct = [];

    //  Shoe Category Filter
    if (Sports)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Sports"),
      ];
    if (Formal)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Formal"),
      ];
    if (Sneaker)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Sneaker"),
      ];
    if (Casual)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.categoryName === "Casual"),
      ];

      // brand Category Filter
      if (nike)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "nike"),
      ];
    if (puma)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "puma"),
      ];
    if (reebok)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "reebok"),
      ];
    if (braton)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "braton"),
      ];
    if (sparky)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "sparky"),
      ];
    if (aadi)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "aadi"),
      ];
    if (asian)
      categoryFilteredProduct = [
        ...categoryFilteredProduct,
        ...product.filter((item) => item.brand === "asian"),
      ];
      console.log(categoryFilteredProduct);
      //rating filter
      if(rating){
        categoryFilteredProduct = product.filter(element => element.rating === rating)
      }
    if (categoryFilteredProduct.length === 0) return product;
    return categoryFilteredProduct;
  };
  