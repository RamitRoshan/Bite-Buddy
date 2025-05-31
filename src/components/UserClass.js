//this is a Class based component

import React from "react";
//this is the way to tell react that , it is a class based component
class UserClass extends React.Component{
    constructor(props){
        super(props);

        //creating state variables
        this.state ={
            userInfo: {
                name: "Dummy",
                location: "Default",         
                //avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                // avatar_url: "https://dummy-photo.com",
            },
        };
        console.log(this.props.name +"Child Constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name +"Child Component Did Mount");
        //Api call
        const data = await fetch("https://api.github.com/users/RamitRoshan");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        

        console.log(json);
    }
    

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render() { 

        console.log(this.props.name + "Child Render");

        //destructuring 
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card"> 
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ramitroshan</h4>
            </div>
        );
    }
}

export default UserClass;


/*
---MOUNTING Lifecycle---
* constructor is called (dummy)
* Render (dummy data)
*    < HTML Dummy > (web page loads with dummy data)
* Component Did Mount is called
*           - <API Call> is called(under componentDidMount)
*    <this.setState>  -> State Variable is updated

[
what do you mean by Mounting Life cycle:-
Mounting -> constructor -> Render -> Update -> componentDidMount -> this.setState
]

when Mounting lifecycle finished setState() was called, whenever there is a 
setState(), it triggers the reconciliation process and the update cycle
now the update cycle is called.


---UPDATE Cycle--- begins
       render(API data)
       <HTML (new API data)> (html is loaded with new API data, this point user will see img and name and everything on the html)
       componentDidUpdate (now called this)
*/