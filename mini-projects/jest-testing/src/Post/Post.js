import React , { useState , useEffect } from 'react';
import fetchData from '../utls/utils';
const PostComponent = () => {
   const [currentPost, setPost] = useState(null);
   const [isLoading, setLoading] = useState(true);
   const [errorMsg, setError] = useState("");
   const [postNo, setPostNumber] = useState(1);

   useEffect(() => {
     setLoading(true);
     const loadData = async () => {
       const result = await fetchData(postNo);
       if (result.status === 200) {
         setPost(result.data);
       } else {
         setError(result.message);
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
       <h1 data-testid="resolved">{currentPost.title}</h1>
       <button
         id="#nextIcon"
         onClick={() => {
           setPostNumber(postNo + 1);
         }}
       >
         Next
       </button>
     </div>
   );
};

export default PostComponent;