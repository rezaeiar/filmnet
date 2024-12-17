import Link from 'next/link'
import React from 'react'

type MobileMenuProps = {
    isShow: boolean
}

export default function MobileMenu({ isShow }: MobileMenuProps) {
    return (
        <div className={`fixed right-0 pt-14 pb-2 bg-stone-900 p-4 w-full z-40 transition-all ${isShow ? 'top-0 opacity-100 visible': '-top-40 visible opacity-0'}`}>
            <ul>
                <li className='mb-4'>
                    <Link href={'/'} className='text-white'>
                        فیلم
                    </Link>
                </li>
                <li className='mb-4'>
                    <Link href={'/'} className='text-white'>
                        سریال
                    </Link>
                </li>
                <li className='mb-4'>
                    <Link href={'/'} className='text-white'>
                        قوانین و مقررات
                    </Link>
                </li>
                <li className='mb-4'>
                    <Link href={'/'} className='text-white'>
                        دسته بندی
                    </Link>
                </li>
            </ul>
        </div>
    )
}
