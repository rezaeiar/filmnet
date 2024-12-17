import ShowcaseSlider from '@/app/components/modules/ShowcaseSlider/ShowcaseSlider'
import Link from 'next/link'
import React from 'react'

const Cinema = () => {
    const movies = [
        {
            id: 1,
            title: 'پرسوک',
            image: '/images/covers/99e3c09b8deb4e719a2384fc54ad9127.jpg',
            label: "",
            isComming: false,
            inNew: false,
            genre: 'درام',
            Production: '1403 / ایران',
            time: "36 دقیقه"
        },
        {
            id: 2,
            title: 'سرهنگ',
            image: '/images/covers/ad564f627bce45678e04ff952542bf71.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'بیوگرافی',
            Production: '2014 / آمریکا',
            time: "1 ساعت 1 دقیقه"
        },
        {
            id: 3,
            title: 'دروازه جنوبی',
            image: '/images/covers/279f9e930ee844c5a7e6a16fde85efa4.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'درام',
            Production: '2014 / نیوزیلند',
            time: "54 دقیقه"
        },
        {
            id: 4,
            title: 'برای نگار',
            image: '/images/covers/0333fa734a814f75a88dfa85b0c828b7.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'مستند',
            Production: '2024 / نیوزیلند',
            time: "51 دقیقه"
        },
        {
            id: 5,
            title: 'بی تو هرگز',
            image: '/images/covers/2749a897276542cf8de757d5261a5b60.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'اکشن',
            Production: '2024 / آمریکا',
            time: "23 دقیقه"
        },
        {
            id: 6,
            title: 'می مات',
            image: '/images/covers/a63a8578a3f24a50950c4679dea753c2.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'درام',
            Production: '2022 / کرواسی',
            time: "40 دقیقه"
        },
        {
            id: 7,
            title: 'بازسازی',
            image: '/images/covers/c2b33f47dfca4fd9a79f62087918c3bc.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'اکشن',
            Production: '2024 / ایتالیا',
            time: "35 دقیقه"
        },
        {
            id: 8,
            title: 'نورا',
            image: '/images/covers/6637935bb338448999c3584fdbca60c7.jpg',
            label: '',
            isComming: false,
            inNew: false,
            genre: 'اکشن',
            Production: '2024 / آمریکا',
            time: "26 دقیقه"
        },
    ]
    return (
        <div className='mb-12 pb-8'>
            <div className="container">
                <div className="">
                    <Link href={'/'} className="flex items-center gap-1 pb-4 text-white group w-fit">
                        <h4 className='text-xl lg:text-2xl'>
                            سینمای دیگر
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
export default Cinema

