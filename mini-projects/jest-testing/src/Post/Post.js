import React , { useState , useEffect } from 'react';
import fetchData from '../utls/utils';
const PostComponent = () => {
    const [currentPost , setPost] = useState(null);
    const [errorMsg , setError] = useState('');
    const [isLoading , setLoading] = useState(true);
    const fetcher = async() => {
        const postData = await fetchData();
        if( postData.status === 200 ){
          setPost(postData.data);
        }
        else{
          setError(postData.message);
        }
        setLoading(false);
      }
    useEffect(() => {
      setLoading(true);
      fetcher();
    },[]);
    return (
        isLoading ? <h1>Loading</h1> :
        errorMsg ? <h1>{errorMsg}</h1>:
        <h1>{currentPost.title}</h1>
    );
};

export default PostComponent;