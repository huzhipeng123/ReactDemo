import React, { Component } from "react";

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

class App2 extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    
    render(){
        return (
            <div>
                <Welcome name="sara"/>
                <Welcome name="Cahal"/>
                <Welcome name="Edite"/>
            </div>
        );
    }
}

export default App2

