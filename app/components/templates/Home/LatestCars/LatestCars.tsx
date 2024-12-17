import ShowcaseSlider from '@/app/components/modules/ShowcaseSlider/ShowcaseSlider'
import Link from 'next/link'
import React from 'react'

const LatestCars = () => {
    const card = [
        {
            id: 1,
            title: 'آخرین خودرو: آریزو GT',
            image: '/images/covers/8ca12e05d2c545119415d2758f136fa2.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '32 دقیقه',
            Production: '1403 / ایران'
        },
        {
            id: 2,
            title: 'آخرین خودرو: میتسویشی',
            image: '/images/covers/2e71f5038fa547c3bcd3c958c74f3e51.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '54 دقیقه',
            Production: '2014 / ایران'
        },
        {
            id: 3,
            title: 'آخرین خودرو: MVM X33',
            image: '/images/covers/d7697984daa7499c8081cc12fbd9a51e.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '1 ساعت 2 دقیقه',
            Production: '2014 / ایران'
        },
        {
            id: 4,
            title: 'آخرین خودرو: هاوال',
            image: '/images/covers/5027e828ded54d50b10cdcec888f8868.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '1 ساعت 2 دقیقه',
            Production: '2014 / ایران'
        },
        {
            id: 5,
            title: 'آخرین خودرو: مزدا 3',
            image: '/images/covers/6f2bc80e3dce4213bfd6066c855397d9.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '43 دقیقه',
            Production: '2024 / ایران'
        },
        {
            id: 6,
            title: 'آخرین خودرو: فولکس',
            image: '/images/covers/f1f0eb5741d5465eb055cede7232f05d.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '1 ساعت',
            Production: '2024 / ایران'
        },
        {
            id: 7,
            title: 'آخرین خودرو: تیگو 8',
            image: '/images/covers/2813d30111b0446cb3738a3862f1e9b9.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '1 ساعت',
            Production: '2024 / ایران'
        },
        {
            id: 8,
            title: 'آخرین خودرو: دنا',
            image: '/images/covers/b6ed4ae90a3f4980ba07aa690559f864.jpg',
            label: '',
            isFree: true,
            inNew: true,
            time: '1 ساعت',
            Production: '2024 / ایران'
        },
    ]
    return (
        <div className='mb-12 pb-8'>
            <div className="container">
                <div className="">
                    <Link href={'/'} className="flex items-center gap-1 pb-4 text-white group w-fit">
                        <h4 className='text-xl lg:text-2xl'>
                            آخرین خودرو
                        </h4>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-5 group-hover:text-pink-700 transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                    <ShowcaseSlider data={card} unique_id='CARS'>
                    </ShowcaseSlider>
                </div>
            </div>
        </div>
    )
}

export default LatestCars