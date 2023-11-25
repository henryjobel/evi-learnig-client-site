/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'


const AllCategorisCard = ({label, icon: Icon ,selecte}) => {
    const [params,SetParams] = useSearchParams()
    const navigate = useNavigate()
    const handleClicked = ()=>{
        let queries = {}
        if(params){
            queries = qs.parse(params.toString());
            const updatedQuery = {...queries,category: label}

            const url = qs.stringifyUrl({
                url: '/allclasses/',
                query: updatedQuery,
            })
            navigate(url)
        }
    }
    params.get('category')
    return (
        <div onClick={handleClicked}  className={`flex flex-col items-center justify-center gap-1 p-3 border-b-2 hover:text-blue-400 transition cursor-pointer text-white ${selecte? 'border-b-blue-700 text-green-300' : 'border-transparent text-blue-300'}`}>
            <Icon size={28}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default AllCategorisCard;