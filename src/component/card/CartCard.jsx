import { useCart } from 'context/CartContext';
import { useWish } from 'context/WishContext';
import React from 'react'

    export const CartCard = (
        {title,
        brand,
        discount,
        price,
        actualPrice,
        imgSrc,
        rating,
        quantity,
        _id}
    ) => {

    const {  addToWishList, increaseQuantity, decreaseQuantity} = useWish();
    const {removeToCart} = useCart();
    const moveToWishListHandler = () => { 
        addToWishList({ title,
            brand,
            discount,
            price,
            actualPrice,
            imgSrc,
            rating,
            _id })
            removeToCart(_id)

    }
   
  return (
    
                    <div className="cart-content">
                        <div className="cart-image">
                            <img src={imgSrc} alt=""/>
                        </div>
    
                        <div className="description-content">
                            <p className="image-title">{title} </p>
                            <p className="image-subtitle">{brand}</p>
                            <div className="price-content">
                                <h2 className="price">₹{price} </h2>
                                <h3 className="actual-price"> {actualPrice}</h3>
                                <p className="discount">{discount}</p>
                            </div>
                                <div className="quantity-container">
                                <button onClick={ () => decreaseQuantity(_id) }>-</button>
                                <p>{quantity}</p>
                                <button onClick={ () => increaseQuantity(_id) }>+</button>
                                </div>
                            <div className="wishlist-button">
                            <button className="move-wishlist"  onClick={() => addToWishList(_id) }>Move to Wishlist</button>
                                <button className="remove-cart"  onClick={() => removeToCart(_id)}>Remove to Cart</button>
                            </div>
                        </div>
                    </div>
              
  )
}
