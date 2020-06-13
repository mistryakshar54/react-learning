import axios from 'axios';

const fetchData = async (postId = 1) => {
    const responseObj = {
        data : [],
        status : 200,
        message : ''
    }
  if( isNaN( postId ) ){
      return { ...responseObj, status: 500, message: "Invalid postId.." };
  }
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return { ...responseObj, data : response.data };
};
export default fetchData;