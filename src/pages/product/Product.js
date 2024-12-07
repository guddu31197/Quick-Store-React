import React, { useReducer } from "react";
import { Filter, ProductCard } from "component";
import "./product.css";
import "../../component/card/productcard.css";
import { useProduct } from "context/ProductContext";
import { reducer } from "reducer/filter-reducer";
import { getPriceWishFilter } from "filterFuntion/sort";
import { productFilter } from "filterFuntion/filter";

export const Product = () => {
  const { product } = useProduct();
  const [state, dispatch] = useReducer(reducer, {
    sortBy: "",
    Sports: false,
    Casual: false,
    Formal: false,
    Sneaker: false,
    nike: false,
    puma: false,
    aadi: false,
    asian: false,
    reebok: false,
    braton: false,
    sparky: false,
    rating: 0,
  });

  const filteredProduct = productFilter(product, state);

  const PriceWishFilter = getPriceWishFilter(filteredProduct, state.sortBy);
  return (
    <div className="product-page-container">
      <Filter dispatch={dispatch} state={state} />

      <div className="card-component">
        {PriceWishFilter?.data?.map((item) => (
          <ProductCard
            key={item._id}
            _id={item._id}
            title={item.title}
            brand={item.brand}
            rating={item.rating}
            price={item.price}
            discount={item.discount}
            actualPrice={item.actualPrice}
            imgSrc={item.image}
          />
        ))}
      </div>
    </div>
  );
};
