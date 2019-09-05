import React from 'react';
import "./loader.css";

const LoaderHOC = WrappedComponent => props => {
  if (props.loadingState === false) {
    return (
      //Pacman loading icon
      <div className="lds-css ng-scope">
        <div
          style={{ width: "100%", height: "100%" }}
          className="lds-pacman"
        >
          <div>
            <div />
            <div />
            <div />
          </div>
          <div className="">
            <div className="" />
            <div />
          </div>
        </div>
      </div>
    );
  } else {
    return <WrappedComponent {...props}/>;
  }
};

export default LoaderHOC;