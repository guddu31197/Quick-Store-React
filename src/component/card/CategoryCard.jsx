import React from 'react'

export const CategoryCard = ({Image, categoryName}) => {
  return (
    
    <div className="category-men">
        <img src={Image} alt="menShoe" className="shoe-category"/>
        <p className="category-text">{categoryName}</p>
    </div>
  
  )
}
