import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import collabImage from '../../../public/collab-img.jpg'

function Collaboration() {
  return (
    <section className='h-[679px] mx-auto w-full md:pt-20'>
      <div className='grid mx-6 md:mx-12 md:grid-cols-2'>
        <div className='flex-start flex-col h-[450px] md:h-[383px] lg:ml-20 max-w-full inline-flex'>
          <h5 className='text-[#5865F2] font-semibold pb-6 text-xs'>Collaboration</h5>
          <h2 className='text-3xl font-bold max-w-[455px] text-primary-white pb-8'>Collaborate with us through our memberships</h2>
          <p className='text-sm text-secondary-gray pb-8 w-[379px]'>Explore membership like never before. Get access to source codes, enjoy free hosting, and engage in exclusive collaboration—think of it like our upgraded Patreon memberships. Your enhanced membership starts here.</p>
          <button className='w-[164px] h-[44px] gap-3 flex items-center bg-primary-white rounded-md justify-end flex-shrink-0 text-primary-black font-bold text-sm'>Subscribe now <ArrowRightIcon className='text-primary-black w-6 h-4 mr-2' /></button>
        </div>
        <div className='p-4 mx-auto lg:mx-0 -bottom-40 items-center justify-center flex'>
          <Image src={collabImage} alt='collab-img'
           className='w-[400px] h-[400px] lg:w-[730px] lg:h-[435] object-contain' />
        </div>
      </div>
    </section>
  )
}

export default Collaboration