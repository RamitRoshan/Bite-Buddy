import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//header
const Header=() =>{

    const [btnNameReact, setBtnNameReact] = useState("Login");
     
    const onlineStatus = useOnlineStatus();

    //If no-dependency array => useEffect is called on every render
    //If there is an empty dependency array([ ]),useEffect is called on initial render(just once) 
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>

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
                     
                </ul>
            </div>
        </div>
    );
};

export default Header;