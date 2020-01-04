import React from "react";
import ListView from '../ListView/ListView';
const NewsComponent = props => {
  return (
    <div>
      <ListView isLoading={false} isItTrue={false} />
    </div>
  );
};

export default NewsComponent;
