interface ServiceCardProps {
    image: StaticImageData,
    text: string,
    heading: string,
    href: string
}

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServicesCard({image, text, heading, href}: ServiceCardProps) {
  return (
    <article className='max-w-[342px] h-auto rounded-[12px] border-[1px] border-[white/10] flex flex-col'>
        <Image className='w-full h-[232px] object-cover' alt='service card' src={image}/>
       <div className='p-4 gap-3 h-24 linear-bg'>
       <h3 className='font-bold text-lg text-primary-white mb-1'>{heading}</h3>
       <span className='flex justify-between'>
       <p className='font-semibold text-secondary-gray text-xs w-[222px]'>{text}</p>
       <Link href={href}>
       <ArrowRightIcon className='text-white w-4 h-4' />
       </Link>
       </span>
       </div>
    </article>
  )
}

export default ServicesCard