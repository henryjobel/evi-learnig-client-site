
import { GiTeacher } from 'react-icons/gi';


const MyClassesCard = ({course}) => {
   const {  title, description, image, price, enrollmentCount, teacher } = course
    return (
        <div>
            <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-slate-100 dark-bg-gray-800 dark-border-gray-700" data-aos="zoom-in-up">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5">
                <h1>{title}</h1>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">{title}</h5>
                    <h5 className="mb-2 font-bold tracking-tight text- xl text-zinc-700 dark-text-white"><GiTeacher className='text-4xl text-blue-400'></GiTeacher> Complet the Course With <span className='text-orange-500'>{teacher.name}</span></h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark-text-gray-400">{description}</p>
                <h5 className="mb-2 font-bold tracking-tight text-blue-500 text- xl dark-text-white">Price: ${price}</h5>
                <h5 className="mb-2 font-bold tracking-tight text-green-800 text- xl dark-text-white">Total Enrollment: {enrollmentCount}</h5>
                <div className="mt-6 form-control">
                    <div className='flex justify-between'>
                        <button className="btn btn-circle">Update</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyClassesCard;