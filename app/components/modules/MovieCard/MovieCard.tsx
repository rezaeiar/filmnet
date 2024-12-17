import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShowcaseSlideType } from '@/app/types/types'

const MovieCard = ({ image, inNew, isComming, label, title, genre, Production, isFree, time, isSerie }: ShowcaseSlideType) => {
    return (
        <Link href={'/'} className="rounded-md group/card relative">
            {
                !!isSerie &&
                <>
                    <div className="absolute h-px w-3/5 -top-2 bg-white/40 right-0 left-0 mx-auto"></div>
                    <div className="absolute h-px w-4/5 -top-1 bg-white/40 right-0 left-0 mx-auto"></div>
                </>
            }
            <div className="relative rounded-lg overflow-hidden">
                {
                    !!label &&
                    <div className="text-xs text-white px-2 py-1 absolute right-0 top-0 bg-pink-600 rounded-e-lg z-20">
                        {label}
                    </div>
                }
                {
                    !!isComming &&
                    <div className="text-xs text-black px-2 py-1 absolute left-0 bottom-0 bg-orange-400 rounded-s-lg z-20">
                        به زودی
                    </div>
                }
                {
                    !!isFree &&
                    <div className="text-xs text-white px-2 py-1 absolute left-0 bottom-0 bg-cyan-600 rounded-s-lg z-20">
                        رایگان
                    </div>
                }
                <div className="h-full w-full absolute top-0 right-0 bg-black/40 invisible opacity-0 group-hover/card:opacity-100 group-hover/card:visible transition-all flex flex-col gap-3 justify-end px-2 py-5 text-white text-sm">
                    {
                        !!time &&
                        <p>
                            {time}
                        </p>
                    }
                    {
                        !!genre &&
                        <p className='font-bold'>
                            {genre}
                        </p>
                    }
                    <p>
                        {Production}
                    </p>
                </div>
                <Image
                    src={image}
                    className='w-48 lg:w-36'
                    height={200}
                    width={180}
                    alt="Movie Image"
                />
            </div>
            <h2 className='text-white text-sm mt-1 line-clamp-1'>
                {title}
            </h2>
        </Link>
    )
}

export default MovieCard