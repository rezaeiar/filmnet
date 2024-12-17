import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {
    const categories = [
        { id: 1, genre: 'اکشن' },
        { id: 2, genre: 'درام' },
        { id: 3, genre: 'کمدی' },
        { id: 4, genre: 'ترسناک' },
        { id: 5, genre: 'علمی تخیلی' },
        { id: 6, genre: 'عاشقانه' },
        { id: 7, genre: 'هیجان‌انگیز' },
        { id: 8, genre: 'فانتزی' },
        { id: 9, genre: 'مستند' },
        { id: 10, genre: 'انیمیشن' },
        { id: 11, genre: 'ماجراجویی' },
        { id: 12, genre: 'معمایی' },
        { id: 13, genre: 'تاریخی' },
        { id: 14, genre: 'موزیکال' },
        { id: 15, genre: 'زندگی‌نامه' },
        { id: 16, genre: 'وسترن' },
    ]
    return (
        <ul className={`grid grid-cols-3 bg-stone-800 p-2 rounded-md absolute top-11 w-96 opacity-0 invisible gap-1 lg:group-hover:visible lg:group-hover:opacity-100 transition-all`}>
            {
                categories.map(category => (
                    <li className='w-full' key={category.id}>
                        <Link href={'/'} className='text-white text-sm block w-full p-1 rounded transition-all hover:bg-stone-700'>
                            {category.genre}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuCategories