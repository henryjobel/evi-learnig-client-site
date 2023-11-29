import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import { SiGoogleclassroom } from 'react-icons/si';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";


const AdminItem = () => {
    return (
        <>
            <MenuItem
                icon={SiGoogleclassroom }
                label='All Classes'
                address='allclass'
              />
            <MenuItem
                icon={LiaChalkboardTeacherSolid }
                label='Teacher Request'
                address='teacherRequst'
              />
            <MenuItem
                icon={FaUsers }
                label='Users'
                address='users'
              />
        </>
    );
};

export default AdminItem;