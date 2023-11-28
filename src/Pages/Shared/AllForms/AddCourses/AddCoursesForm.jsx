
import SectionTitle from '../../SectionTitle/SectionTitle';
import { categories } from '../../../../Components/Courses/Categoris/CategorisData';
import useAuth from '../../../../Hoocks/useAuth';

const AddCoursesForm = ({handleSubmit,imageuplodtext,handleUploadtext}) => {
    const {user} = useAuth()
    return (
        <div>
            <SectionTitle heading='Add Classes' subHeading='Add Classes For Student'></SectionTitle>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='Name'
                defaultValue={user?.displayName}
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='email'
                id='email'
                type='text'
                placeholder='email'
                defaultValue={user?.email}
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Course Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Course Title'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-blue-300 focus:outline-blue-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>
          </div>
          <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:blue-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-300 focus:outline-blue-500 '
                name='description'
              ></textarea>
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input onChange={e=>handleUploadtext(e.target.files[0])}

                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500'>
                     {imageuplodtext}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type='submit' className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500'>
          Add Class
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddCoursesForm;