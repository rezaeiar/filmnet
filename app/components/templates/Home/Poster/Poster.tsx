import Image from 'next/image'
import React from 'react'

const Poster = () => {
    return (
        <div className='mb-12'>
            <Image
                src="/images/posters/3be26e39dab84a22a2e1c50a9ed4372f.jpg"
                className='w-full'
                height={800}
                width={2080}
                alt="Poster"
            />
        </div>
    )
}

export default Poster