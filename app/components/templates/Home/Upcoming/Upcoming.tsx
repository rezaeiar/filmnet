import ShowcaseSlider from '@/app/components/modules/ShowcaseSlider/ShowcaseSlider'
import Link from 'next/link'
import React from 'react'

const Upcoming = () => {
    const movies = [
        {
            id: 1,
            title: 'ساعت 6 صبح',
            image: '/images/covers/d88b7207479d4494af6191fd5c4a2db1.jpg',
            label: 'سینما آنلاین',
            isComming: true,
            inNew: true,
            genre: 'درام',
            Production: '1403 / ایران'
        },
        {
            id: 2,
            title: 'موآنا',
            image: '/images/covers/500f5541e98a469cbf78c722177d8076.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'کمدی | ماجرایی',
            Production: '2014 / آمریکا'
        },
        {
            id: 3,
            title: 'آتون و چگوار سیاه',
            image: '/images/covers/bbb3705681c9474ba3df8d8d34dea66a.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'درام',
            Production: '2014 / نیوزیلند'
        },
        {
            id: 4,
            title: 'هرگز روی برنگردان',
            image: '/images/covers/0d46d46f228b42b1b13aa2f7b9dae0d6.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'مستند',
            Production: '2024 / نیوزیلند'
        },
        {
            id: 5,
            title: 'ماموریت غیرممکن 8',
            image: '/images/covers/5678c4372bfb4bb6adf604f4073c6127.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'اکشن',
            Production: '2024 / آمریکا',
            isSerie: true,
        },
        {
            id: 6,
            title: 'گفتگو',
            image: '/images/covers/81e4ea2156824f0495f8cd4cc9375b0e.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'درام',
            Production: '2022 / کرواسی'
        },
        {
            id: 7,
            title: 'مرخصی',
            image: '/images/covers/dd275f07f2114a3a876a6aa111030bac.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'اکشن',
            Production: '2024 / ایتالیا'
        },
        {
            id: 8,
            title: 'ماراب وب',
            image: '/images/covers/4dc554b6ec704e80b61f9f1136b791f8.jpg',
            label: '',
            isComming: true,
            inNew: true,
            genre: 'اکشن',
            Production: '2024 / آمریکا'
        },
    ]
    return (
        <div className='mb-12 pb-8'>
            <div className="container">
                <div className="">
                    <Link href={'/'} className="flex items-center gap-1 pb-4 text-white group w-fit">
                        <h4 className='text-xl lg:text-2xl'>
                            به‌زودی
                        </h4>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-5 group-hover:text-pink-700 transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                    <ShowcaseSlider data={movies} unique_id='UPCOMMING'>
                    </ShowcaseSlider>
                </div>
            </div>
        </div>
    )
}

export default Upcoming