import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
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
                            <FaGithub className='text-primary-white w-6 h-6' />
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