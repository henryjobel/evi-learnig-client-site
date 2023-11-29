import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import { SiGoogleclassroom } from 'react-icons/si';

const StudentItem = () => {
    return (
        <>
            <MenuItem
                icon={SiGoogleclassroom }
                label='My Enroll Class'
                address='myenrollclass'
              />
        </>
    );
};

export default StudentItem;