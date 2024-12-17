"use client"
import { backToTopHandler } from '@/app/utils/healpers'
import Link from 'next/link'
import React from 'react'

export const BackToTop = () => {
    return (
        <div className="p-2 rounded border border-white text-white cursor-pointer" onClick={backToTopHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
            </svg>
        </div>
    )
}
