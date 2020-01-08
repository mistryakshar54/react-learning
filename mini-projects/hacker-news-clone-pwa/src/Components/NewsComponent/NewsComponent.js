import React, { useEffect } from "react";
import ListView from '../ListView/ListView';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { createSelector } from "reselect";
import * as newsActions from "../../store/actions/NewsActions";
import withLoader from "../LoadingHOC/Loader";
import Paper from "@material-ui/core/Paper";

const NewsSelector = createSelector(
  state => state.CoreReducer.loadingState,
  state => state.NewsReducer,
  (loadingState , newsData) => {
    return { isLoading : loadingState,newsData };
  }
);

const NewsComponent = props => {
  debugger;
  console.log("PRops: " , props);
  const dispatch = useDispatch();
  useEffect(() => {
    let pageParams = props.match.url.split("/");
    dispatch(newsActions.fetchNews(pageParams[1], pageParams[2]));
  }, [dispatch , props.match]);

  const coreSlice = useSelector(NewsSelector);
  let { isLoading , newsData } = coreSlice;
  debugger;
  return (
    <div>
       <Paper style={{ marginTop: "5%" }} elevation={3}>
          <div>
            Pagination Goes Here
          </div>
       </Paper>
      <ListView
        isLoading={isLoading}
        listData={newsData.newslist}
        currentPageNo={newsData.currentPageNo}
      />
    </div>
  );
};

export default NewsComponent;
