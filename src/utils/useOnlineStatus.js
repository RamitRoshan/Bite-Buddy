import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    //check if online, (true i.e internet is working fine)
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline" , () => {
            //if user is offline then setonline status false
            setOnlineStatus(false);
        })

        //when my user will go online then update onlinestatus to true
        window.addEventListener("online" , () => {
            setOnlineStatus(true);
        })
    }, []);


    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;