import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import reciple from '../../../public/assets/reciplejs.png'

const Products = () => {
    return (
        <section className='w-full h-full lg:h-[844px] px-6 mt-40 lg:mt-0 items-center justify-center flex flex-col'>
            
                <div className=' h-[156px] mb-20 mx-8 md:text-center lg:mx-auto'>
                    <h5 className='text-[#5865F2] font-semibold pb-6 text-xs'>Products</h5>
                    <h2 className='font-bold text-4xl text-primary-white mb-4'>Make use of the products we publish</h2>
                    <p className='text-sm text-secondary-gray md:text-center max-w-[600px]'>Explore innovation with our products. Elevate your experiencewith cutting edge solutions designed for excellence and impact.</p>
                </div>
                <div className='mt-6 linear-bg_second rounded-t-lg border-[0.1px] border-b-0 border-[white/10] max-w-[1156px] h-[420px] mb-20 p-6 mx-6 lg:mx-0'>
                    <div className='flex gap-4 '>
                        <Link href={'/link-to-gt'}>
                             <svg className='w-6 h-6 text-white' xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3"/></svg>
                        </Link>
                        <span className='w-auto h-6 px-3 flex bg-green-500 text-white items-center justify-center rounded-md text-xs'>
                            Open-sourced
                        </span>
                    </div>
                    <Image alt='reciplejs' className='w-auto lg:w-[988px] h-auto lg:h-[200px] mx-auto pt-8 object-fill' src={reciple} />

                    <div className='flex flex-col pt-6'>
                    <h3 className='pt-16 text-2xl font-bold text-primary-white'>Enhance your discord.js experience</h3>
                        <span className=' items-center justify-between hidden md:flex'>
                            <p className='w-[735px] text-xs text-secondary-gray mt-3'>A project made by The North Solution. Use our open-sourced discord.js framework to seamlessly handle commands, interactions, command halts, cooldowns and more!</p>
                            <Link href={'/link-to-site'} className='h-10 w-[125px] bg-primary-white items-center justify-center flex text-primary-black text-sm rounded-md'>View website</Link>
                        </span>
                        <span className=' flex flex-col md:hidden'>
                            <p className='max-w-[735px] mt-4 text-xs text-secondary-gray'>A project made by The North Solution. Use our open-sourced discord.js framework to seamlessly handle commands, interactions, command halts, cooldowns and more!</p>
                            <Link href={'/link-to-site'} className='h-10 mt-4 w-[120px] bg-primary-white text-xs items-center justify-center flex text-primary-black rounded-md'>View website</Link>
                        </span>
                    </div>
                </div>
            
        </section>
    )
}

export default Products
