"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import MovieCard from '../MovieCard/MovieCard';
import { CollectionSlideType } from '@/app/types/types';
import { CollectionCard } from '../CollectionCard/CollectionCard';

type CollectioSliderProps = {
    data: CollectionSlideType[],
    unique_id: string
}

const CollectioSlider = ({ data, unique_id }: CollectioSliderProps) => {
    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            modules={[Navigation]}
            pagination={{
                clickable: true,
            }}
            navigation={{
                prevEl: `.prev__${unique_id}`,
                nextEl: `.next__${unique_id}`,
            }}
            className="mySwiper relative group"
        >
            <div className={`next__${unique_id} absolute h-full w-10 bg-gradient-to-r from-stone-900 to-transparent left-0 top-0 z-10 flex justify-end items-center cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 -translate-x-4 text-white group-hover:translate-x-2 transition-all duration-300">
                    <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </div>
            {
                data.map(item => (
                    <SwiperSlide className='!w-fit' key={item.id}>
                        <CollectionCard {...item} />
                    </SwiperSlide>
                ))
            }
            <div className={`prev__${unique_id} absolute h-full w-10 bg-gradient-to-r from-transparent to-stone-900 right-0 top-0 z-10 flex justify-start items-center cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 translate-x-4 text-white group-hover:-translate-x-2 transition-all duration-300">
                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
        </Swiper>
    )
}

export default CollectioSlider