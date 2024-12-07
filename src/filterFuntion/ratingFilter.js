export const ratingFilter = (product, rating) => {
      let ratingFilterProduct = [];

    if (rating )
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 5),
    ];
    if (rating)
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 4),
    ];
    if (rating)
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 3),
    ];
    if (rating)
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 2),
    ];
    if (rating)
    ratingFilterProduct = [
       ...ratingFilter, 
      ...product.filter((a) => a.rating === 1),
    ];
    return product;
  };