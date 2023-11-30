
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
const Banner = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/V9h2rgN/Connor-Hamilton-3.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
                            <div className="pr-2 md:mb-14 py-14 md:py-0">
                                <h1 className="text-3xl font-semibold text-blue-200 xl:text-5xl lg:text-3xl h-64 pt-5"><span className="block w-full">Get a financial experience</span> for growing your business!</h1>
                                <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                                    Empowering you to make better financial decisions, We truly are professional money planners...
                                </p>
                                <div className="mt-4">
                                    <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
                                </div>
                            </div>

                            <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                                <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488" />
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/w7RnwHW/Connor-Hamilton-1.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


                            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                                <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
                            </div>
                            <div
                                className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

                                <div className="flex flex-col p-12 md:px-16">
                                    <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
                                    <p className="mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.
                                    </p>

                                    <div className="mt-8">
                                        <a href="#"
                                            className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                            More</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/rZj8RW1/Connor-Hamilton-2.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-64">

                            <div
                                className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline text-blue-300">Data to enrich your</span>
                                        <span className="block text-blue-300 xl:inline">online business</span>
                                    </h1>
                                    <p
                                        className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                        fugiat veniam occaecat fugiat aliqua.
                                    </p>
                                    
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a href="#"
                                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                                Get started
                                            </a>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <a href="#"
                                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                                Live demo
                                            </a>
                                        </div>
                                    </div>
                
                                </div>

                                <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
                                </div>
                                
                            </div>

                        </section>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;