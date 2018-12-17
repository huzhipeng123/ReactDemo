import React, { Component } from "react";

function Avatar(props){
    return (
        <img className="Avatar">
            src={props.user.avatarUrl}
            
        </img>
    )
}

class Comment extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.props.author = props.author;
        this.props.author.name = props.author.name;
        this.props.author.avatarUrl = props.author.avatarUrl;
    }

    
    render(){
        return (
            <div className="Comment">
                <div classname="UserInfo">
                    <img className="Avatar"
                    src = {this.props.author.avatarUrl}
                    alt = {this.props.author.name}
                    />
                </div>
                <div className="UserInfo-name">
                    {this.props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {this.props.text}
            </div>
            <div className="Comment-date">
                {formatDate(this.props.date)}
            </div>
        );
    }
}