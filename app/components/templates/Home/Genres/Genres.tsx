import CollectioSlider from '@/app/components/modules/CollectionSlider/CollectionSlider'
import Link from 'next/link'
import React from 'react'

const Genres = () => {
    const genreList = [
        {
            id: 1,
            title: 'ماجرایی',
            image: '/images/covers/3d152cdb004d46aea72a44eca9e630e5.jpg',
        },
        {
            id: 2,
            title: 'جنایی',
            image: '/images/covers/22d6bdb83e864fddbd28f68f04ecb324.jpg',
        },
        {
            id: 3,
            title: 'معمایی',
            image: '/images/covers/3076e55fdf1e4db7b52c399cbd50bb79.jpg',
        },
        {
            id: 4,
            title: 'ورزشی',
            image: '/images/covers/0bca43c29535453d9ef2dfbd8df477c6.jpg',
        },
        {
            id: 5,
            title: 'بیوگرافی',
            image: '/images/covers/cc4cf01665d94b3fb7480308ebeab6c4.jpg',
        },
        {
            id: 6,
            title: 'جنگی',
            image: '/images/covers/05468d3c637b40e1bd5bd4b017455cc7.jpg',
        },
    ]
    return (
        <div className='mb-12 pb-8'>
            <div className="container">
                <div className="">
                    <h4 className='text-xl lg:text-2xl pb-4 text-white group w-fit'>
                        ژانر
                    </h4>
                    <CollectioSlider data={genreList} unique_id='GENRES'>
                    </CollectioSlider>
                </div>
            </div>
        </div>
    )
}

export default Genres