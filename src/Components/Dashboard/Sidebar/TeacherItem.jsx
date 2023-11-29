import { MdClass } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import MenuItem from './MenuItem/MenuItem';

const TeacherItem = () => {
    return (
        <div>
            <MenuItem
                icon={SiGoogleclassroom }
                label='Add Classe'
                address='addclass'
              />
              <MenuItem
                icon={MdClass}
                label='My Classe'
                address='myclass'
              />
              <MenuItem
                icon={MdClass}
                label='Assingment'
                address='assigment'
              />
        </div>
    );
};

export default TeacherItem;