import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{

    //const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    // useEffect(() => {
    //     fetchMenu();
    // }, []);  

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
            {/* {categories.map((category) => (
                <RestaurantCategory data={category?.card?.card}/>
            ))} */}

            {categories?.map((category, index) => (
               <RestaurantCategory
                 key={category.card.card.title || index} // Preferably use a unique value
                 data={category.card.card}
                />
            ))}





            {/* <h2 className="font-semibold text-xl">Menu</h2>
            {categories?.map((category, index) => (
                <div key={index}>
                    <h3>{category.card.card.title}</h3>
                    <ul>
                        {category.card.card.itemCards?.map((item) => (
                            <li key={item.card.info.id}>
                                {item.card.info.name} - ₹
                                {(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </li>

                        ))}
                    </ul>
                </div>
            ))} */}

            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                 {item.card.info.name} - {"Rs."}
                 {item.card.info.price/100 || item.card.info.defaultprice/100}
                    </li>
                ))}
            </ul> */}

        </div>
    );
};
export default RestaurantMenu;