import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {

    //state variable will decide whether itemlist will shown or not
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        //if showitem is true then make it false and vice-versa
        // setShowItems(!showItems);
        setShowIndex();
    };
    return (
    <div>
        {/* Header*/}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div 
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
            >
              <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
              </span>
              <span>⬇️</span>
            </div>

            {/* if showItems is true then show ItemList */}
            { showItems && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
        {/* Accordion Body*/}

    
    </div>
    );
}

export default RestaurantCategory;