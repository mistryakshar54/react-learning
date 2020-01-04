import initialState  from "../initialState";

const NewsReducer = (  stateSlice = initialState.news , action ) => {
    switch (action.type) {
      case "LOAD_NEWS": {
        let { newslist , currentPageNo  } = action.payload;
        let newsSlice = { ...stateSlice };
        if (newslist && newslist.length > 0) {
          newsSlice.currentPageNo = currentPageNo++;
          newsSlice.newslist = newslist;
        }
         return newsSlice;
      }
    //   case "LOAD_NEWS": {
    //     break;
    //   }

      default: return { ...stateSlice };
    }
}

export default NewsReducer;