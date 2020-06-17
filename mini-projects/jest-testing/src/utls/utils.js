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
  // const responseProm = new Promise( ( res , rej ) => {
  //   setTimeout(() => {
  //     res({
  //   userId: 1,
  //   id: 1,
  //   title:
  //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   body:
  //     "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  // });
  //   }, 1000);
  // } )
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  // const dta = await responseProm;
  return { ...responseObj, data: response.data };
};
export default fetchData;