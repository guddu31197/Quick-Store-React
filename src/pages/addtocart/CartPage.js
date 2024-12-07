import { CartCard } from "component";
import { useWish } from "context/WishContext";
import React, { useEffect, useState } from "react";
import "./addtocart.css";
import { useCart } from "context/CartContext";

export const CartPage = () => {
  const { total } = useWish();
  const {getCart, cart} = useCart();
  const [ totalQuantity, setTotalQuantity ] = useState(0);
  const quantityHandler = () => {
    let qty = 0;
    cart.map(cartItem => qty += cartItem.quantity)
    setTotalQuantity(qty);
}
useEffect(() => {
  getCart();
}, [])
useEffect(()=> {
    quantityHandler();
},[cart])


  return (
   
    <div className="cart-page">
      <div className="wishlist-card">
        {cart.map(item => (
          <CartCard
            _id={item._id}
            price={item.price}
            title={item.title}
            key={item._id}
            brand={item.brand}
            rating={item.rating}
            discount={item.discount}
            imgSrc={item.image}
            quantity={item.quantity}
          />
        ))}
      </div>


      <div className="price-container">
        <div className="final-price-tag">
          <p className="price-heading">Price Details</p>
          <div className="original-price">
            <p>Price ({totalQuantity} items)</p>
            <p>{total}/-</p>
          </div>
          <div className="discount-price">
            <p>Discount</p>
            <p>-500</p>
          </div>
          <div className="delivery-price">
            <p>Delivery Charges</p>
            <p>100</p>
          </div>

          <div className="total-price">
            <p>Total Amount</p>
            <p>{total -500 + 100}/-</p>
          </div>
          <p>You will save ₹500 on this Order</p>
          <button className="place-order">Place Your Order</button>
        </div>
      </div>
      </div>
    
  );
};
