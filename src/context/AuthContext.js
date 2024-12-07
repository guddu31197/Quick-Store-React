import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useWish } from "./WishContext";
const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userName, setuserName] = useState("");
  const [encodedToken, setEncodedToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  
  const loginHandler = async ({ email, password }) => {
    try {
      console.log(email, password);
      const response = await axios.post("http://localhost:5000/user/signin", { email, password });
      console.log(response);
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: response.data.token,
          userName: response.data.createdUser.username,
          email: response.data.createdUser.email,
        })
      );
      setUser({
        token: response.data.token,
        userName: response.data.createdUser.username,
        email: response.data.createdUser.email,
      });
      console.log(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  // logout handler
  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/login');
  };

  const signUpHandler = async (formData) => {
    try {
      console.log(formData);
      const response = await axios.post("http://localhost:5000/user/signin", formData);
      console.log(response);
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: response.data.token,
          userName: response.data.createdUser.username,
          email: response.data.createdUser.email,
        })
      );
      setUser({
        token: response.data.token,
        userName: response.data.createdUser.username,
        email: response.data.createdUser.email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userName,
        encodedToken,
        email,
        password,
        setEmail,
        setPassword,
        loginHandler,
        user,
        logoutHandler,
        signUpHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
