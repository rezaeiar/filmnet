import ShowcaseSlider from '@/app/components/modules/ShowcaseSlider/ShowcaseSlider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Suggestion = () => {
    const suggest = [
        {
            id: 1,
            title: 'مستند جهان شگفت انگیز | مادرید',
            image: '/images/covers/3f58da6cf7ed44c5ab7b9038e2715429.jpg',
            Production: 'محصول: 2014',
            lebels: ['مستند']
        },
        {
            id: 2,
            title: 'سریال رومی',
            image: '/images/covers/a6f6e6c02179402a8fa368bee3db124b.jpg',
            Production: 'محصول: 2024',
            lebels: ['درام', 'تاریخی']
        },
        {
            id: 3,
            title: 'سرآشپز مخفی',
            image: '/images/covers/db76cc18ff8d4f22977d3d5675dc2893.jpg',
            Production: 'محصول: 2023',
            lebels: ['درام', 'تاریخی']
        }
    ]
    return (
        <div className='mb-12 pb-8'>
            <div className="container">
                <div className="">
                    <h4 className='text-xl lg:text-2xl pb-4 text-white group w-fit'>
                        پیشنهاد فیلم نت
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            suggest.map((item, index) => (
                                <Link href={'/'} className={`group/card relative rounded-lg overflow-hidden ${index === 0 ? 'col-span-2 lg:col-span-1': 'col-span-1'}`} key={item.id}>
                                    <div className="h-full w-full absolute top-0 right-0 bg-black/40 invisible opacity-0 group-hover/card:opacity-100 group-hover/card:visible transition-all flex flex-col gap-2 lg:gap-3 justify-end px-3 lg:px-6 py-2 lg:py-5 text-white text-sm">
                                        <p className='text-base lg:text-lg font-bold'>
                                            {item.title}
                                        </p>
                                        <p>
                                            {item.Production}
                                        </p>
                                        <div className="hidden lg:flex items-center gap-2">
                                            {
                                                item.lebels.map(label => (
                                                    <div className="text-xs bg-slate-700 rounded-full text-white py-1 px-2">
                                                        {label}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Image
                                        src={item.image}
                                        className='w-full'
                                        height={400}
                                        width={880}
                                        alt=""
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Suggestion