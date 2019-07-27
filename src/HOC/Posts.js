import React, { Component } from 'react';
import { Loader } from "./Loader";

class Posts extends Component {

    state = {
        isDataLoaded : false
    }
    componentDidMount()
    {
        setTimeout(() => {
            this.setState( { isDataLoaded : true });
        }, 1000);
    }
    render(){
        return(
            <h1>Sample Posts</h1>
        );
    };

}

export default Loader(Posts);