import React from 'react';
import ItemListComponent from "./ItemListComponent";
import SummaryComponent from "./SummaryComponent";
const ItemListLayout = () => {
    return (
      <div>
        <h1 className="content-header">Render Props Example</h1>
        <h4 >Items are a part of Item List Component. <br/>The selected items are passed as props to Bag Items (Summary component) using render props method</h4>

        <ItemListComponent
          render={(cartItems) => <SummaryComponent cartItems={cartItems} />}
        />
      </div>
    );
}

export default ItemListLayout;