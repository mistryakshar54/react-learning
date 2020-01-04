import instance from "../../AxiosConfig/Config";

const statusMsg = {
  "200": "Success",
  "500": "Internal Server Error",
  "404": "Record Not Found"
};

export const setLoadingState = () => {
  return {
    type: "LOADING_API"
  };
};

export const setSuccessState = () => {
  return {
    type: "SUCCESS_API"
  };
};

export const setFailedState = ({ message, status }) => {
  return {
    type: "ERROR_API",
    message,
    status
  };
};

export const dispatchGet = async (endPoint, pageNo) => {
  const respObj = {
    status: 200,
    data: [],
    message: ""
  };
  let url = pageNo > 0 ? endPoint + "/page=" + pageNo : endPoint;
  try {
    const response = await instance.get(url);
    respObj.data = response.data;
  } catch (error) {
      respObj.status = error.status ? error.status : 500;
      respObj.data = [];
      respObj.message =  getMessageForStatus(error.status)
  }
   return respObj;
};

const getMessageForStatus = ( status  = 500) => {
    return statusMsg[status];
}