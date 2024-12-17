"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MenuCategories from '../MenuCategories/MenuCategories'
import MobileMenu from '../MobileMenu/MobileMenu'

export const Navbar = () => {
    const [isShowSearch, setIsShowSearch] = useState(false)
    let lastScrollTop: number = 0;
    let [direction, setDirection] = useState<"UP" | 'DOWN'>("UP");
    let [isScrollInTop, setIsScrollInTop] = useState<boolean>(true);
    let [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);

    const searchDisplayHandler = () => {
        setIsShowSearch(presState => !presState)
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setDirection("DOWN")
            } else {
                setDirection("UP")
                if (currentScrollTop < 40) {
                    setIsScrollInTop(true)
                } else {
                    setIsScrollInTop(false)
                }
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // جلوگیری از منفی شدن
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <MobileMenu isShow={isShowMobileMenu} />
            <div className={`w-full fixed top-0 right-0 z-50 transition-all hover:bg-stone-900 ${direction === "DOWN" ? '-translate-y-16' : 'translate-y-0'} ${isScrollInTop ? 'bg-transparent' : 'bg-stone-900'}`}>
                <div className="container">
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex items-center gap-2 lg:gap-10 shrink-0 py-3 lg:py-2">
                            <div className="block lg:hidden cursor-pointer" onClick={() => setIsShowMobileMenu(prev => !prev)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <Link href={'/'}>
                                <Image
                                    src={'/images/logo.png'}
                                    alt="Logo"
                                    width={28}
                                    height={28}
                                />
                            </Link>
                            <ul className='text-sm text-white hidden lg:flex items-center gap-6'>
                                <li className='flex items-center relative lg:py-3 group'>
                                    <Link href={'/'}>
                                        فیلم
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    <MenuCategories />
                                </li>
                                <li className='flex items-center relative py-3 group'>
                                    <Link href={'/'}>
                                        سریال
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    <MenuCategories />
                                </li>
                                <li className='before:content-[""] before:w-full before:h-0.5 before:opacity-0 hover:before:opacity-100 transition-all before:bg-pink-700 before:-bottom-2 before:right-0 before:absolute relative'>
                                    <Link href={'/'}>
                                        دسته بندی
                                    </Link>
                                </li>
                                <li className='before:content-[""] before:w-full before:h-0.5 before:opacity-0 hover:before:opacity-100 transition-all before:bg-pink-700 before:-bottom-2 before:right-0 before:absolute relative'>
                                    <Link href={'/'}>
                                        کودک و نوجوان
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-3 lg:gap-6 items-center grow justify-end">
                            {
                                isShowSearch ? (
                                    <>
                                        <div className="px-2 fixed lg:relative top-16 lg:top-0 right-0 w-full">
                                            <input
                                                type="text"
                                                className='w-full py-1 px-2 rounded-md outline-none border text-sm font-normal '
                                                placeholder='جستجو..'
                                            />
                                        </div>
                                        <div className="cursor-pointer" onClick={searchDisplayHandler}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </>
                                ) : (
                                    <div className="cursor-pointer" onClick={searchDisplayHandler}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                )
                            }

                            <div className="bg-gray-200 text-black px-3 py-1 text-sm rounded-md shrink-0">
                                خرید اشتراک
                            </div>
                            <div className="shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
