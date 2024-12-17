import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BackToTop } from '../BackToTop/BackToTop'

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-700 relative z-50">
            <div className="container">
                <div className="py-8">
                    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between pb-8">
                        <div>
                            <Link href={'/'}>
                                <Image
                                    src={'/images/logo.png'}
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <div>
                            <ul className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8 text-white text-sm">
                                <li>
                                    <Link href={'/'}>
                                        پرسش‌های متداول
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        تماس با ما
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        درباره فیلم‌نت
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        قوانین و مقررات
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-1 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                            </svg>
                            <Link href={'/'} className="lg:text-sm">
                                دریافت اپلیکیشن های فیلم‌نت
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-8 border-b border-white/40">
                        <BackToTop />
                        <div className="py-2 rounded border border-white/40 text-white flex divide-x divide-x-reverse divide-white/40">
                            <Link href={'/'} className='px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
                                </svg>
                            </Link>
                            <Link href={'/'} className='px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-8 gap-2">
                        <p className='text-white/40 text-xs lg:text-sm'>
                            کلیه‌ی حقوق مادی و معنوی اپلیکیشن «فیلم‌نت» متعلق به شرکت «پارس فیلم‌نت» است.
                        </p>
                        <div className="flex items-center gap-4 shrink-0">
                            <Link href={'/'}>
                                <Image
                                    src={'/images/neshane_sabt.svg'}
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                            </Link>
                            <Link href={'/'}>
                                <Image
                                    src={'/images/enamad.png'}
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer