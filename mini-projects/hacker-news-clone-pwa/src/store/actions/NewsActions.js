import * as coreActions from './CoreActions';
export const fetchNews = () => {
    return async (dispatch) => {
        dispatch( coreActions.setLoadingState() );
        const newsData = await coreActions.dispatchGet("news" , 0);
        if(newsData.status === 200){
            dispatch( coreActions.setSuccessState() );
            dispatch(loadNews(newsData.data , 0));
        }
        else{
            dispatch(coreActions.setFailedState( newsData ));
        }
       
    }
}

const loadNews = (newslist, currentPageNo) => {
  debugger;
  return {
    type: "LOAD_NEWS",
    payload : {
        newslist,
        currentPageNo
    }
  };
};