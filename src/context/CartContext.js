// const { createContext } = require("react");
import axios from "axios";
import { useContext } from "react";
import { createContext } from "react"
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";


const cartContext = createContext(null);

const CartProvider = ({children}) => {
    const {user} = useAuth();
    const [cart, setCart] = useState([]);

    const addToCarts = async (product) => {
        console.log(product);
        try {
          const response = await axios.post(
            `http://localhost:5000/cart/${product}`,
            {},
            {
              headers: {
                Authorization: user.token,
              },
            }
          );
          getCart();
          toast.success("Add to Cart Sucessfully")
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
    
      const getCart = async () => {
        try {
          const response = await axios.get("http://localhost:5000/cart",{
          headers: {
            Authorization: user.token
          }
        })
        setCart(response.data.map(item => item.product));
          
        } catch (error) {
          console.log(error);
        }
        
      }
      const removeToCart = async (productId) => {
        console.log(productId);
        try {
          const response = await axios.delete(`http://localhost:5000/cart/${productId}`, {
            headers : {
              Authorization: user.token,
            }
          })
          getCart();
          setCart(prev => prev.filter(item => item.id !== productId));
          toast.error("Cart Deleted");
        } catch (error) {
          console.log(error);
        }
       
      }
    
    return(
        <cartContext.Provider value={{getCart, addToCarts, cart, removeToCart}}>
            {children}
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext);

export {CartProvider, useCart};