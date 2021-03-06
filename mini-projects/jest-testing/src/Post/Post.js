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
       <h4 className="postBody" data-testid="currentPostBody">{currentPost.body}</h4>
       <PostBtn
         label="<"
         testId="prevBtn"
         id="#prevBtn"
         isDisabled={postNo <= 1}
         clickHandler={() => {
           setPostNumber(postNo - 1);
         }}
       />
       <PostBtn
         label=">"
         testId="nextBtn"
         id="#nextBtn"
         isDisabled={postNo > 10}
         clickHandler={() => {
           setPostNumber(postNo + 1);
         }}
       />
     </div>
   );
};

export default PostComponent;