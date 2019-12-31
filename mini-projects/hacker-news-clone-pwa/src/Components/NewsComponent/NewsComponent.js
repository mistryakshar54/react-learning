import React from "react";
import ListView from '../ListView/ListView';
import withLoader from "../LoadingHOC/Loader";
const NewsComponent = props => {
  const ListViewComponent = withLoader(ListView);
  return (
    <div>
      <ListView isLoading={false} isItTrue={false} />
    </div>
  );
};

export default NewsComponent;
