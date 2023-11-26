import {  Link, useLoaderData, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { GiTeacher } from 'react-icons/gi';


const SeeDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    const details = useLoaderData()
    const detail = details.find(detail => detail.id === idInt)
    console.log(detail)



    return (

        <div className='bg-gray-600 pt-36'>
            <Helmet>
                <title>{detail.title}</title>
            </Helmet>
            <body className="font-sans antialiased leading-normal tracking-wider text-gray-900 bg-cover"
      style={{ backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')" }}>

      <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto my-32 lg:h-screen lg:my-0">

        {/* Main Col */}
        <div id="profile" className="w-full mx-6 bg-white rounded-lg shadow-2xl opacity-75 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0">

          <div className="p-4 text-center md:p-12 lg:text-left">
            <h1 className="pt-8 text-3xl font-bold lg:pt-0">{detail.title}</h1>
            <div className="w-4/5 pt-3 mx-auto border-b-2 border-blue-600 opacity-25 lg:mx-0"></div>
            <div className="avatar online">
  <div className="w-24 mt-4 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
            <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
               {detail.teacher.name}
            </p>
            <h5 className="mb-2 font-bold tracking-tight text-green-800 text- xl dark-text-white">Total Enrollment: {detail.enrollmentCount}</h5>
            <div className="rating rating-xs">
  <input type="radio" name="rating-9" className="rating-hidden" />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
  <input type="radio" name="rating-9" className="mask mask-star-2"  />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
  <input type="radio" name="rating-9" className="mask mask-star-2"  checked/>
</div>
            <p className="pt-8 text-sm">{detail.description}</p>

            <div className="pt-12 pb-8">
            <Link  className="btn btn-primary btn-outline">Enroll Now</Link>
            </div>

          </div>

        </div>

        {/* Img Col */}
        <div className="w-full lg:w-2/5">
          {/* Big profile image for side bar (desktop) */}
          <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-slate-100 dark-bg-gray-800 dark-border-gray-700" data-aos="zoom-in-up">
            <a href="#">
                <img className="rounded-t-lg" src={detail.image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">{detail.title}</h5>
                    <h5 className="mb-2 font-bold tracking-tight text- xl text-zinc-700 dark-text-white"><GiTeacher className='text-4xl text-blue-400'></GiTeacher> Complet the Course With <span className='text-orange-500'>{detail.teacher.name}</span></h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark-text-gray-400">{detail.description}</p>
                <h5 className="mb-2 font-bold tracking-tight text-blue-500 text- xl dark-text-white">Price: ${detail.price}</h5>
                
            </div>
        </div>
        </div>

      </div>

      

    </body>
        </div>

    );
};

export default SeeDetails;
