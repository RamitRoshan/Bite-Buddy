import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

//lazy loading of Grocery
const Grocery = lazy(() => import("./components/Grocery"));

//lazy loading of about us(instead of directly importing we do lazy loading and separate a about us file)
const About = lazy(() => import("./components/About"));

//arrow function
const AppLayout = () =>{

    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data  ={
            name: "Ramit Roshan"
        };
        setUserName(data.name);
    }, []);

    return(
        <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
              <Header/>
              <Outlet/>
            </div>
          </UserContext.Provider>
        </Provider>
        
    );
};

//createBrowserRouter takes some configuration, this
//configuration has a list, i.e array of objects
const appRouter = createBrowserRouter([
    {
        //if path is in home page then do load AppLayout
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading.....</h1>}>
                        <About/>
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Grocery/>
                    </Suspense>
                ), 
            },
            {
                //resId is dynamic here, it can change acc/to the ID of the restaurant.
                //this is dynamic path
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ],
        errorElement: <Error/>,
    },
     
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


 
