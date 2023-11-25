/* eslint-disable no-unused-vars */
import React from 'react';

const AllCategorisCard = ({label, icon: Icon}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-blue-400 transition cursor-pointer text-white'>
            <Icon size={28}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default AllCategorisCard;