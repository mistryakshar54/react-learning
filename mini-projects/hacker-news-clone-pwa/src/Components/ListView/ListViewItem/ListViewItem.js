import React from 'react';

const ListViewItem = ( props ) => {
    // const {slice} = props;
    // debugger;
    // console.log(slice);
    return (
      <div>
        <div className="item-header">
          <label>
            I made a “Best of 2019” website with Svelte. Here's a write-up of
            how I made it
          </label>{" "}
          - User Name
        </div>
        <div className="item-subheader">
          <label>11 Points</label>
          <label>13 Mins Ago</label>
          <label>3 Comments</label>
        </div>
      </div>
    );
}

export default ListViewItem;