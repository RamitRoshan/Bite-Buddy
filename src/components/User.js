//This is a functional component codes 
import { useEffect, useState } from "react";
//functional components 
const User = ({name}) => {
    //creating a state variable(state variable name is count)
    const[count, setCount] = useState(0);
    const [count2] = useState(1);
    
    
    useEffect(() => {
        //API call
    }, []);
    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Gurgaon</h3>
            <h4>Contact: @ramitroshan1013</h4>
            <h5>Phone: 9931970143</h5>
        </div>
    );
};

export default User;