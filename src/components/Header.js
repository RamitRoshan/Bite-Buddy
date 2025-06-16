import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//header
const Header=() =>{

    const [btnNameReact, setBtnNameReact] = useState("Login");
     
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    //If no-dependency array => useEffect is called on every render
    //If there is an empty dependency array([ ]),useEffect is called on initial render(just once) 
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-white">
            <div className="logo-container">
                <img className="w-56" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>

                    <button 
                    className="login" 
                    onClick={()=>{
                        //here we did if btn is Login then do logout else Login
                        btnNameReact === "Login" 
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login"); 
                    }}
                    >{btnNameReact}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                     

                </ul>
            </div>
        </div>
    );
};

export default Header;