import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import instance from "../../AxiosConfig/Config";

type NewsType = {
    comments_count: number
    domain: string
    id: number
    points: number
    time: number
    time_ago: string
    title: string
    type: string
    url: string
    user: string
}

const News = ( { match } : RouteComponentProps ) => {

    const [data, setData] = useState({ hits: [] });
    const [,endPoint, pageNo] = match.url.split('/');
    useEffect( () => {
        const fetchNews = async() => {
            console.log("Pagenp" , pageNo, "endpt", endPoint);
            let url = parseInt(pageNo) > 0 ? endPoint + "?page=" + pageNo : endPoint;
            console.log("THISurl", url);
            try {
                const response = await instance.get('');
                const respData : NewsType[] = response.data;
                console.log("respData", respData);
            } catch (error) {
                console.log("Error: ", error.response.status, error.message);
                // respObj.status = error.status ? error.status : 500;
                // respObj.data = [];
                // respObj.message = getMessageForStatus(error.status)
            }        
        }
        fetchNews();
    }, [endPoint, pageNo]);

    return( <h1>Hello</h1> );
}

export default News;