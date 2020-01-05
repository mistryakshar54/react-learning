import React, { useEffect } from "react";
import ListView from '../ListView/ListView';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { createSelector } from "reselect";
import * as newsActions from "../../store/actions/NewsActions";
import withLoader from "../LoadingHOC/Loader";

const NewsSelector = createSelector(
  state => state.CoreReducer.loadingState,
  state => state.NewsReducer,
  (loadingState , newsData) => {
    return { isLoading : loadingState,newsData };
  }
);

const NewsComponent = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsActions.fetchNews());
  }, [dispatch]);

  const coreSlice = useSelector(NewsSelector);
  let { isLoading , newsData } = coreSlice;
  debugger;
  return (
    <div>
      <ListView isLoading={isLoading} listData={newsData} />
    </div>
  );
};

export default NewsComponent;
