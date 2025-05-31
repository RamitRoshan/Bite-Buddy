import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//in place of import React we can write just import {Component} from "react";
//and in place of React.Component , we can write Component. class About extends Component

//creating class based components 
class About extends React.Component{

    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }

    render() {
        //console.log("Parent Render");
        return(
        <div>
            <h1>About Class Component</h1>
            <h2>This is Namaste React web Series</h2>
            {/* now we have two instance of the same user class */}
            <UserClass name={"First"} location={"Gurgaon-Class"}/>
        </div>
        );
    }
}

export default About;      