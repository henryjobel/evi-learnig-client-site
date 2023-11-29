
import { Helmet } from 'react-helmet-async'
import useAuth from '../../../Hoocks/useAuth'
import useRole from '../../../Hoocks/useRole'

const Profile = () => {
  const { user } = useAuth()
  const [role] = useRole()
  console.log(user)
  return (
    <div className='flex items-center justify-center h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='w-3/5 bg-white shadow-lg rounded-2xl'>
        <img
          alt='profile'
          src='https://i.ibb.co/FVjNkgN/adelin-preda-t-Or-T4q-Tp-Q-unsplash.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user.photoURL}
              className='object-cover w-24 h-24 mx-auto border-2 border-white rounded-full '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-blue-500 rounded-full'>
            {role && role.toUpperCase()}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user.email}</span>
              </p>

              <div>
                <button className='bg-blue-700 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-blue-700 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
