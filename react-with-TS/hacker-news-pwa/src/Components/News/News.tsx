import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import instance from "../../AxiosConfig/Config";
import ListView from '../ListView/ListView';
import Pagination from '../Pagination/Pagination';
import { CircularProgress } from '@material-ui/core';

export type NewsType = {
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

    const [appData, setData] = useState<NewsType[]>([]);
    const [appLoading, setLoading] = useState(false);
    const [appError, setError] = useState('');
   
    let [,endPoint, pageNo] = match.url.split('/');
    let history = useHistory();

    useEffect( () => {
        setLoading(true);
        const fetchNews = async() => {
            let url = parseInt(pageNo) > 0 ? endPoint + "?page=" + pageNo : endPoint;
            try {
                let newsList: NewsType[] = [];
                const newsResponse = await instance.get(url);
                if (newsResponse?.data?.length){
                    newsList = newsResponse.data;
                }
                setData(newsList);
            } catch (error) {
                if(error?.message){
                   const errorString = `${error?.response?.status} - ${error.message}`;
                   setError(errorString);
                }
                else{
                    setError('An error has occuerd!!');
                }
            }
            setLoading(false);        
        }
        fetchNews();
    }, [endPoint, pageNo]);

    const LoadingContent = () => <div style={ { display : 'flex', justifyContent : 'center', margin:'10%' } }><CircularProgress color="primary" /></div>;
    const ErrorContent = () => <h1>Error! {appError}</h1>;

    const handleNavigatePage = (direction : string) => {
        let currPageNo = parseInt(pageNo); 
        direction === 'previous' ? currPageNo-- : currPageNo++;
        history.push(`/${endPoint}/${currPageNo}`);
    }

    return (
        <div>
            {
                appLoading ? <LoadingContent/> : 
                appError ? <ErrorContent/> :
                <div>
                    <Pagination currentPage={parseInt(pageNo)} nextPage={handleNavigatePage} />
                    <ListView newsData={ appData } />
                </div>
            }
        </div>
    );
}

export default News;