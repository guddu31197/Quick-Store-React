import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const wishlistContext = createContext(null);

const WishProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const {user} = useAuth();
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  // funtions for add to cart and remove card
  // const addToWishList = (product) => {
  //   console.log(product);
  //   if(user == null ? user: user.token){
  //     let isItemExit = wishlist.find((item) => item._id === product._id);
  //     console.log(product);
  //     if (isItemExit) {
  //       setWishList((prev) =>
  //       prev.map((item) =>
  //       item._id === isItemExit._id
  //       ? { ...item, quantity: item.quantity + 1 }
  //       : item
  //       )
  //       );
  //     } else {
  //       setWishList((prev) => [...prev, { ...product, quantity: 1 }]);
  //     }
  //   }
  //   else{
  //     navigate('/login');
  //     console.log("Not login");
  //   }
  //   console.log(wishlist);
  // }

  const addToWishList =  async (productId) => {
    try {
      const response = await axios.post(`http://localhost:5000/wishlist/${productId}`,
      {},
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    getWishlist();
    toast.success("WishList Created Successfully");
    
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.messgae);
    }
  }
  const getWishlist = async () => {
    try {
      const response = await axios.get("http://localhost:5000/wishlist",{
        headers: {
          Authorization: user.token,
        }
      })
      setWishList(response.data);
      
    } catch (error) {
      
    }
  }
  const deleteWishList = async (productId) => {
    console.log(productId);
    try {
      const response = await axios.delete(`http://localhost:5000/wishlist/${productId}`, {
        headers : {
          Authorization: user.token,
        }
      })
      getWishlist();
      setWishList(prev => prev.filter(item => item.id !== productId));
      toast.error("WishList Deleted");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
   
  }

  const wishlistToCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:5000/wishlistToCart/${productId}`,
      {},
      {
        headers: {
          Authorization: user.token,
        },
      }
    );
    
    } catch (error) {
      console.log(error);
    }
  }

 

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.map((cartItem) => (totalPrice += cartItem.price * cartItem.quantity));
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);




//   const addToCart = (product) => {
//     if(user == null ? user: user.token){
//     let isItemExit = cart.find((item) => item._id === product._id);
//     console.log(isItemExit);
//     if (isItemExit) {
//       setCart((prev) =>
//         prev.map((item) =>
//           item._id === isItemExit._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart((prev) => [...prev, { ...product, quantity: 1 }]);
//       console.log((prev) => [...prev, { ...product, quantity: 1 }]);
//     }
//   }
//   else{
//       navigate('/login');
//       console.log("Not login");
//   }
// }

  const increaseQuantity = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (_id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === _id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item, quantity: 1 }
          : item
      )
    );
  };

  const removeFromWishList = (id) => {
    // for underStanding purpose
    // let temproduct = wishlist
    // temproduct = temproduct.filter(item => item._id !== id)
    // setWishList(temproduct);
    console.log(id);
    setWishList((wishlistProducts) =>
      wishlistProducts.filter((item) => item._id !== id)
    );
  };

  const removeToCart = (id) => {
    setCart((wishlistProducts) =>
      wishlistProducts.filter((item) => item._id !== id)
    );
  };

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        setWishList,
        addToWishList,
        removeFromWishList,
        wishlistToCart,
        cart,
        setCart,
        removeToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
        getWishlist,
        deleteWishList
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWish = () => useContext(wishlistContext);

export { WishProvider, useWish };
