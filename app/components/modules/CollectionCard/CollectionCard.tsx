import { CollectionSlideType } from '@/app/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CollectionCard = ({ image, title }: CollectionSlideType) => {
    return (
        <Link href={'/'}>
            <div className="overflow-hidden rounded-lg w-60">
                <Image
                    src={image}
                    className=' hover:scale-150 transition-all duration-[2000ms] w-full'
                    height={300}
                    width={1200}
                    alt=""
                />
            </div>
            <h2 className='text-white mt-2'>
                {title}
            </h2>
        </Link>
    )
}
