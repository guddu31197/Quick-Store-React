import React, { useState } from "react";
import "./productcard.css";
import { useWish } from "context/WishContext";
import { useCart } from "context/CartContext";
import { Link } from "react-router-dom";
export const ProductCard = ({
  title,
  brand,
  discount,
  price,
  actualPrice,
  imgSrc,
  rating,
  _id,
}) => {
  const { wishlist, addToWishList, deleteWishList } = useWish();
  console.log(wishlist.map((item) => item.product));
  const {getCart, cart} = useCart();
  console.log(cart.some((item) => item._id === _id));

  const {addToCarts} = useCart();
  return ( 
    <div className="product-card">
      <img src={imgSrc} alt="" />
      <div className="wishlist-box">
        {wishlist.map((item) => item.product).some((item) => item._id === _id) ? (
          <i
            style={{ color: "red" }}
            onClick={() => deleteWishList(_id)}
            className="wish-list-icon fa fa-heart"
          ></i>
        ) : (
          <i
            onClick={() => addToWishList(_id)}
            className="wish-list-icon fa fa-heart"
          ></i>
        )}
      </div>
      <p className="image-title">{title} </p>
      <p className="image-subtitle">{brand}</p>
      <div className="rating-box">
        <p className="rating">
          {rating} <i className=" fa fa-star"></i>
        </p>
      </div>
      <div className="price-content">
        <p className="price">₹{price} </p>
        <p className="actual-price"> {actualPrice}</p>
        <p className="discount-price">{discount}</p>
      </div>
      {cart.some((item) => item._id === _id)?
      (<button className="buy" >  <Link to="/cart" style={{ color: "green" }}>Go to cart Page</Link></button>):
      <button className="buy"  onClick={() => addToCarts(_id)}>Add To Card</button>
    }
    </div>
  );
};
