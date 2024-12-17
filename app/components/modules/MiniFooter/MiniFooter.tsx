"use client"
import { backToTopHandler } from '@/app/utils/healpers';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const MiniFooter = () => {
    let lastScrollTop: number = 0;
    let [direction, setDirection] = useState<"UP" | 'DOWN'>("UP");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setDirection("DOWN")
            } else {
                setDirection("UP")
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // جلوگیری از منفی شدن
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-stone-700 transition-all py-4 px-6 flex items-center justify-between fixed bottom-0 right-0 z-40 w-full ${direction === "DOWN" ? 'translate-y-0' : 'translate-y-14'}`}>
            <div className="flex gap-4 items-center">
                <div className="text-white cursor-pointer" onClick={backToTopHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd" />
                    </svg>
                </div>
                <ul className="flex items-center gap-3 md:gap-4 text-white text-xs md:text-sm">
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
                    <li className='hidden md:block'>
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
            <div className='hidden md:flex items-center gap-1 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                    <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                </svg>
                <Link href={'/'} className="lg:text-sm">
                    دریافت اپلیکیشن های فیلم‌نت
                </Link>
            </div>
        </div>
    )
}
export default MiniFooter
