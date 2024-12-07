import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [ product, setProduct ] = useState([])
    const [category, setcategory ] = useState([]);

    
    const getProduct = async () => {
      try {
        const res = await axios.get('http://localhost:5000', {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      getProduct();
       
    },[])
    useEffect(()=>{
        fetch('/api/categories')
        .then(res=>res.json())
        .then(data=>setcategory(data.categories))
      },[])

    return(
        
        <ProductContext.Provider value={{product: product,category: category}}>
            {children}
        </ProductContext.Provider>
    )
}
// custom Hook
export const useProduct = () => useContext(ProductContext);


