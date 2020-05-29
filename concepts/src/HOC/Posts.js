import React, { Component } from 'react';
import axios from "axios";
import LoaderHOC from "./LoaderHOC";
import { PostsList } from "./PostsList";
class Posts extends Component {
  state = {
    isDataLoaded: false,
    isDataLoaded2: false,
    posts : [],
    errorMessage : ""
  };
  componentDidMount() {
    setTimeout(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        this.setState({
          isDataLoaded: true,
          posts: res.data.splice(0, 10),
          errorMessage: ""
        });
      })
      .catch( err => {
          this.setState({ 
              isDataLoaded: true,
              posts : [],
              errorMessage : err.toJSON().message
            });
      });
    }, 2000);
  }
  render() {
    return (
      <div className="item-list-container">
        <h1 className="content-header">Higher Order Components Example</h1>
        <h4 >Loader HOC displays the pacman loader untill the posts are loaded.. </h4>
        <PostLoader
          loadingState={this.state.isDataLoaded}
          dataToPass={this.state.posts}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}
let PostLoader = LoaderHOC(PostsList);

export default LoaderHOC(Posts);