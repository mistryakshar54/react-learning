import React, { Component } from "react";
import { connect } from "react-redux";
import * as PostsActionCreators from "../store/actioncreators/PostsActionCreators";
import "./PostsComponent.css";
export class PostsComponent extends Component {
  componentDidMount() {
    this.props.onFetchPostsList();
  }

  render() {
    return (
      <div>
        <h2 className="header-label">
          Redux Thunk Testing with Axios
          <br />
        </h2>
        <div className="d-flex p-2 justify-content-start flex-wrap product-list">
          {this.props.dataFetched === true ? (
            this.props.postsList.map((item, index) => {
              return (
                <div className="content" key={index}>
                  <label className="posts-header">{item.title}</label>
                  <p className="posts-body">{item.body}</p>
                </div>
              );
            })
          ) : (
            <h1 className="posts-loading">Loading Data...</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postsList: state.posts,
    dataFetched: state.postsLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostsList: () => {
      dispatch(PostsActionCreators.fetchPostsThunk());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsComponent);
