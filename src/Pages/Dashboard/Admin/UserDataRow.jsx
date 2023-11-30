import { useState } from "react"
import UpdateUserModal from "./UpdateUserModal"
import { updateUsers } from "../../../api/auth"
import toast from "react-hot-toast"

const UserDataRow = ({ user,refetch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const modalHandler = async role => {
    try {
      const data = await updateUsers({ email: user?.email, role })
      console.log(data)
      refetch()
      toast.success('User role Updated')
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }finally{
      setIsOpen(false)
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
              } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </span>
        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} modalHandler={modalHandler}></UpdateUserModal>
      </td>
    </tr>
  )
}

export default UserDataRow
