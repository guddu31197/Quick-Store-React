const { createContext, useContext, useState } = require("react");

const NavContext = createContext({wishcount: 0});

const NavProvider = ({children}) => {
    const [ wishcount, setwishCount ] = useState(0);
    const [ cartCount, setcartCount ] = useState(0);

    return(
        <NavContext.Provider value={{ wishcount, setwishCount, cartCount, setcartCount }}>
            {children}
        </NavContext.Provider>
    )
}

const useNav = () => useContext(NavContext)
export {NavContext, NavProvider, useNav}
