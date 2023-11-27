import { Link, useLoaderData } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { GiTeacher } from 'react-icons/gi';


const SeeDetails = () => {
    const detail = useLoaderData()
    return (

        <div className=' pt-36'>
            <Helmet>
                <title>{detail.title}</title>
            </Helmet>
            <div className="font-sans antialiased leading-normal tracking-wider text-gray-900 bg-cover"
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
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                            </div>
                            <p className="pt-8 text-sm">{detail.description}</p>
                            <div className="pt-12 pb-8">
                                <Link to='/payment' className="btn btn-primary btn-outline">Enroll Now</Link>
                            </div>

                        </div>

                    </div>

                 
                    <div className="w-full lg:w-2/5">
                       
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



            </div>
            <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
        <p
            className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white text-teal-900 uppercase rounded-full bg-sky-500">
            Brand new
        </p>
    </div>
    <h2
        className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">

            <svg viewBox="0 0 52 24" fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                    <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                        height=".30">
                        <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                </defs>
                <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
            </svg>

            <span className="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
    </h2>
    <p className="text-base text-gray-700 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae.
    </p>
</div>


<div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
    <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                    
                </svg>
            </div>
        </div>
        <div>
            <h6 className="mb-2 font-semibold leading-5">Website Development:</h6>
            <p className="mb-3 text-sm text-gray-900">
                Our website development service offers end-to-end solutions for creating and launching professional
                and visually appealing websites.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                        </svg>
                    </span>
                    Computers
                </li>
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                           
                        </svg>
                    </span>
                    Health
                </li>
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                            
                        </svg>
                    </span>
                    Reference
                </li>
            </ul>
            <a href="/" aria-label=""
                className="inline-flex items-center font-semibold text-green-400 transition-colors duration-200 hover:text-green-800">Learn
                more
            </a>
        </div>
    </div>
    <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                 
                </svg>
            </div>
        </div>
        <div>
            <h6 className="mb-2 font-semibold leading-5">Social Media Marketing:</h6>
            <p className="mb-3 text-sm text-gray-900">
                Our social media marketing service helps businesses establish a
                strong online presence and engage with their target audience effectively.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                            
                        </svg>
                    </span>
                    Computers
                </li>
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                          
                        </svg>
                    </span>
                    Health
                </li>
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                            
                        </svg>
                    </span>
                    Reference
                </li>
            </ul>
            <a href="/" aria-label=""
                className="inline-flex items-center font-semibold text-green-400 transition-colors duration-200 hover:text-green-800">Learn
                more
            </a>
        </div>
    </div>
    <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                    
                </svg>
            </div>
        </div>
        <div>
            <h6 className="mb-2 font-semibold leading-5">Content Writing and Copywriting:</h6>
            <p className="mb-3 text-sm text-gray-900">
                Our content writing and copywriting service offers high-quality and engaging content that captivates your audience and drives conversions.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                            
                        </svg>
                    </span>
                    Computers
                </li>
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                            
                        </svg>
                    </span>
                    Health
                </li>
                <li className="flex items-start">
                    <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                            
                        </svg>
                    </span>
                    Reference
                </li>
            </ul>
            <a href="/" aria-label=""
                className="inline-flex items-center font-semibold text-green-400 transition-colors duration-200 hover:text-green-800">Learn
                more
            </a>
        </div>
    </div>
</div>

</div>
            </div>
        </div>

    );
};

export default SeeDetails;
