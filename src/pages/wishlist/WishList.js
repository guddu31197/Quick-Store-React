import { ProductCard } from 'component';
import { useWish } from 'context/WishContext';
import React, { useEffect } from 'react'
import './wishlist.css'

export const WishList = () => {
    const { wishlist, getWishlist } = useWish();
    console.log(wishlist.map(item => item.product));
    useEffect(() => {
      getWishlist();
    }, [])

  return (
   
    <div className='wishlist-container'>
      <h1 className='wishlist-heading'>WishList Item : {wishlist.length}</h1>
      <div className="wishlist-card">
        {wishlist.map(item => item.product).map(item => (
          <ProductCard
            _id={item._id}
            price={item.price}
            title={item.title}
            key={item._id}
            brand={item.brand}
            rating={item.rating}
            discount={item.discount}
            imgSrc={item.image}
          />
        ))}
        
      </div>
      </div>
      
  )
}
