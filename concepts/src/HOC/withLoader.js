import './loader.scss';
import React from 'react';
export const WithLoader = ( props ) => {
    if(props.showLoader === true) 
    {
        return (
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
              <div class="">
                <div class="" />
                <div />
              </div>
            </div>
          </div>
        );
    }
    else
    {
        return props.children;
    }
}