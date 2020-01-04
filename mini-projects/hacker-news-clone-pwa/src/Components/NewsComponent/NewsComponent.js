import React, { useEffect } from "react";
import ListView from '../ListView/ListView';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { createSelector } from "reselect";
import * as newsActions from "../../store/actions/NewsActions";
import withLoader from "../LoadingHOC/Loader";

const NewsComponent = props => {
  const dispatch = useDispatch();
  const list = [1,2,3,4];
  useEffect(() => {
    dispatch(newsActions.fetchNews());
  }, [dispatch]);

  const coreSlice = useSelector(state => {
    console.log(state.CoreReducer);
    return state.CoreReducer;
  }, shallowEqual);

  return (
    <div>
      <ListView isLoading={coreSlice.loadingState} listData={list} />
    </div>
  );
};

export default NewsComponent;
