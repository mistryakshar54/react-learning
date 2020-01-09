import React, { useEffect , useState } from "react";
import ListView from '../ListView/ListView';
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { createSelector } from "reselect";
import * as newsActions from "../../store/actions/NewsActions";
import withLoader from "../LoadingHOC/Loader";
import PaginationComponent from '../PaginationComponent/Pagination';
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  let [temp, item, currentPageNo] = props.match.url.split("/");

  useEffect(() => {
    dispatch(newsActions.fetchNews(item, currentPageNo));
  }, [currentPageNo, dispatch, item]);


  const handleNavigatePage = ( direction ) => {
    direction === 'previous' ? currentPageNo-- : currentPageNo++;
    history.push( `/${item}/${currentPageNo}` );
  }

  const coreSlice = useSelector(NewsSelector);
  let { isLoading , newsData } = coreSlice;
  debugger;
  return (
    <div>
       <PaginationComponent currentPage={currentPageNo} totalPages={17} nextPage={ handleNavigatePage } />
      <ListView
        isLoading={isLoading}
        listData={newsData.newslist}
        currentPageNo={newsData.currentPageNo}
      />
    </div>
  );
};

export default NewsComponent;
