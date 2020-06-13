import fetchData from './utils';
import axios from 'axios';
jest.mock("axios");

test('Returns error when post id is invalid' , async()=> {
    const mockErrorResp = {
      data: [],
      status: 500,
      message: "Invalid postId..",
    };
    const resp = await fetchData('abc');
    expect( resp ).toEqual(mockErrorResp);
});

test('Returns post data correctly' , async()=> {
    const postData = {
        userId: 1,
        id: 1,
        title:"Sample Titlw",
        body:"This is a body",
    };
    const mockResp = {
      data: [postData],
      status: 200,
      message: "",
    };
    
    axios.get.mockResolvedValue({data : [postData]});
    const resp = await fetchData(1);
    expect(resp).toEqual(mockResp);
});