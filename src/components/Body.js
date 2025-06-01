import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =() => {

    // Always call custom hooks at the top
    const onlineStatus = useOnlineStatus();
    
    // Local state Variable  - Super powerful variable
    const [listofRestaurants, setListofRestaurants] = useState([]);   

    //Another state vaariables only for filtered 
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    //One more State Variable 
    const [searchText, setSearchText] = useState("");

 

    //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body rerendered");

    

    useEffect(()=>{
        fetchData();
    }, []);

    // const fetchData = async () => {
    //     const data = await fetch(
    //         "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    //     );

    const fetchData = async () => {
        const data = await fetch(
          "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9064481%26lng%3D77.6037295%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
        );
        

        const json = await data.json();
        // console.log(json);

        // Optional Chaining
        // setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListofRestaurants(restaurants);
    setFilteredRestaurant(restaurants);

        
    };


    if(onlineStatus === false) 
    return (
        <h1>
            Looks like you're offline!! Please check your internet connections.
        </h1>
    );

    //Conditional Rendering
    if(listofRestaurants.length === 0){
        return <Shimmer/>;
    }



   //here, I use ternary Operator
    return listofRestaurants.length === 0 ? ( 
    <Shimmer/> 
    ) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button 
                    onClick={()=>{
                        // Filter the restaurant cards and update the UI
                        //searchTExt
                        console.log(searchText);

                        const filteredRestaurant = listofRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        
                        );
                        setFilteredRestaurant(filteredRestaurant);
                        //setListofRestaurants(filteredRestaurant);

                    }}
                    >Search</button>
                </div>

                <button 
                className="filter-btn" 
                onClick={() => {
                
                    //have to write filter logic over here
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListofRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container"> 
            {/* {listofRestaurant.map((restaurant) */}
                {filteredRestaurant.map((restaurant) => ( // Accessing `restaurants` array
                  <Link 
                  key={restaurant.info.id} 
                  to={"/restaurants/" + restaurant.info.id}
                  >
                    <RestaurantCard resData = {restaurant}/>
                  </Link>
                   //here we willuse map-filter , but we can also 
                   //use for loop here
                ))}
                  
            </div>
        </div>
    );
};


export default Body;