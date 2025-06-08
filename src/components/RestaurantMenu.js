import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{

    //const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);
    
    //it will show the indexlist of dish like 0 ist dish
   const [showIndex, setShowIndex] = useState(null);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };
     
    if (resInfo === null) return <Shimmer/>;

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = 
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.filter(c=>c.info?.cuisines);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.card?.itemCards
     );
    //  console.log(categories);


    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(" , ")} - {costForTwoMessage}
            </p>
 
            {/* categories accodians*/}
            {categories.map((category, index) => (
                //controlled components
                <RestaurantCategory
                key={category?.card?.card.title} 
                data={category?.card?.card}

                showItems={index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                dummy = {dummy}
                />
            ))}

            {/* {categories?.map((category, index) => (
               <RestaurantCategory
                 key={category.card.card.title || index} // Preferably use a unique value
                 data={category.card.card}
                />
            ))} */}

         

        </div>
    );
};
export default RestaurantMenu;