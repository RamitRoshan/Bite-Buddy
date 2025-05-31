import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//arrow function
const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                //resId is dynamic here, it can change acc/to the ID of the restaurant.
                //this is dynamic path
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },
     
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


 
