import React, { Component } from "react";

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
)

class JSX extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    
    render(){
        return (
            element
        );
    }
}
export default JSX;