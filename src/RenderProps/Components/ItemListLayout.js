import React from 'react';
import ItemListComponent from "./ItemListComponent";
import SummaryComponent from "./SummaryComponent";
const ItemListLayout = () => {
    return (
      <ItemListComponent
        render={cartItems => <SummaryComponent cartItems={cartItems} />}
      />
    );
}

export default ItemListLayout;