import React from "react";
import ListView from '../ListView/ListView';
import withLoader from "../LoadingHOC/Loader";
const NewsComponent = props => {
  const ListViewComponent = withLoader(ListView);
  return (
    <div>
      <ListViewComponent isLoading={false} />
    </div>
  );
};

export default NewsComponent;
