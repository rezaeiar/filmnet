"use client"
import Link from 'next/link'
import React from 'react'
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Header = () => {
    const sliderSlides = [
        {
            id: 1,
            title: 'جان سخت',
            images: '/images/covers/67304f3ee0d4456f97bb0f00f2702962.jpg'
        },
        {
            id: 2,
            title: 'گردن زنی',
            images: '/images/covers/1034a104c33c4b8dafb9a8300737e1a7.jpg'
        },
        {
            id: 3,
            title: 'روز شغال',
            images: '/images/covers/e3921eb42c65405daed0d4b1090f7491.jpg'
        },
    ]
    return (
        <div className='relative'>
            <Swiper
                effect={'fade'}
                slidesPerView={1}
                modules={[Navigation, Pagination, EffectFade]}
                pagination={{
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                navigation={{
                    prevEl: `.prev__header`,
                    nextEl: `.next__header`,
                }}
                className="mySwiper relative flex items-center z-40 group"
            >
                <div className="container absolute z-40 hidden lg:flex justify-end bottom-20">
                    <div className="swiper-pagination gap-1 justify-center w-full items-center h-full flex opacity-0 transition-all group-hover:opacity-100"></div>
                    <div className="flex gap-2 items-center z-40 relative">
                        <div className={`prev__header h-10 w-10 bg-white/20 flex justify-center items-center cursor-pointer transition-all duration-300 rounded-full hover:bg-white/30`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 text-white">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={`next__header h-10 w-10 bg-white/20 flex justify-center items-center cursor-pointer transition-all duration-300 rounded-full hover:bg-white/30`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 text-white">
                                <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                {
                    sliderSlides.map(item => (
                        <SwiperSlide className='!w-full z-50 relative' key={item.id}>
                            <div className="relative flex justify-center items-end h-[600px] bg-cover" style={{ background: `url(${item.images})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <div className="container absolute flex justify-between">
                                    <div className=" w-full h-full flex flex-col gap-4 z-40 pb-20">
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                                            <h2 className='text-white text-xl lg:text-2xl font-bold'>
                                                {item.title}
                                            </h2>
                                            <div className="bg-gray-200 py-1 px-2 rounded-full text-black w-fit -order-1 lg:order-1">
                                                سینما آنلاین
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Link href={'/'} className='bg-pink-700 hover:bg-pink-600 rounded-md p-2 text-white flex gap-1 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                    <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                                                </svg>
                                                مشاهده آنلاین
                                            </Link>
                                            <Link href={'/'} className='bg-white/20 hover:bg-white/30 rounded-md p-2 text-white flex gap-1 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                                                </svg>
                                                اطلاعات بیشتر
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-2/5 bg-gradient-to-b absolute bottom-0 w-full from-transparent to-stone-900 z-30"></div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Header