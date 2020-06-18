import React , { useState , useEffect } from 'react';
import fetchData from '../utls/utils';
import PostBtn from '../Button/Button';
const PostComponent = () => {
   const [currentPost, setPost] = useState(null);
   const [isLoading, setLoading] = useState(true);
   const [errorMsg, setError] = useState("");
   const [postNo, setPostNumber] = useState(1);

   useEffect(() => {
     setLoading(true);
     const loadData = async () => {
       const result = await fetchData(postNo);
       setPost(result.data);
       if (result) {
         if (result.status === 200) {
           setPost(result.data);
         } else {
           setError(result.message);
         }
       }
       setLoading(false);
     };
     loadData();
   }, [postNo]);

   return isLoading ? (
     <h1 data-testid="loading">Loading</h1>
   ) : errorMsg ? (
     <h1 data-testid="error">{errorMsg}</h1>
   ) : (
     <div>
       <h1 data-testid="currentPost">{currentPost.title}</h1>
       <PostBtn
         label="Previous"
         testId="prevBtn"
         id="#prevBtn"
         clickHandler={() => {
           setPostNumber(postNo - 1);
         }}
       />
       <PostBtn
         label="Next"
         testId="nextBtn"
         id="#nextBtn"
         clickHandler={() => {
           setPostNumber(postNo + 1);
         }}
       />
     </div>
   );
};

export default PostComponent;