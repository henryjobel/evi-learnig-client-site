import { useQuery } from '@tanstack/react-query';

import { getAllFeedBack } from '../../api/courses';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules';




const FeedBack = () => {
    const { data: feedbacks = [], refetch } = useQuery({
        queryKey: ['feedBack'],
        queryFn: async () => await getAllFeedBack()
    })
    console.log(feedbacks)
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                classNameName="mySwiper"
            >

                {
                    feedbacks.map(feedback => <SwiperSlide key={feedback._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                            

                            <div
                                className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                                <div className="rounded-t-lg h-32 overflow-hidden">
                                    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                                </div>
                                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                    <img className="object-cover object-center h-32" src={feedback.profilePicture} alt='Woman looking front' />
                                </div>
                                <div className="text-center mt-2">
                                    <h2 className="font-semibold">{feedback.studentName}</h2>
                                    <p className="text-gray-500">Student</p>
                                    <h2 className="font-semibold text-green-500">{feedback.courseName}</h2>
                                    <p className="text-gray-500"><span className='text-blue-700 font-bold'>FeedBack: </span>{feedback.feedback}</p>
                                </div>
                                <h1 className='font-bold text-center'>Reating: {feedback.rating}</h1>
                                <div className="p-4 border-t mx-8 mt-2">
                                    <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default FeedBack;