import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Link from 'next/link'

interface MarketingCardProps {
    title: string,
    text: string,
    label: string,
    href: string,
    marketIcon: any
}

function MarketingCard({ title, text, label, marketIcon, href }: MarketingCardProps) {
    return (
        <article className='h-[335px] max-w-[320px] rounded-[25px] border-[1px] border-primary-white/10'>
            <div className='p-4'>
                <div className=' mt-6 justify-between flex items-center'>
                    <span className='w-11 h-11 rounded-full text-black flex bg-white items-center justify-center'>
                        {marketIcon}
                    </span>
                    <Link href={href}><ArrowRightIcon className='text-white w-4 h-4' /></Link>
                </div>
                <h4 className='pt-6 text-sm'><strong className='text-white'>Oppertunity</strong> <span className='text-secondary-gray'>/ {label}</span></h4>
            <h3 className='font-bold text-xl text-primary-white my-6'>{title}</h3>
            <p className='text-xs text-secondary-gray'>{text}</p>
            </div>
        </article>
    )
}

export default MarketingCard