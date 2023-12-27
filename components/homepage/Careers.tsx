import React from 'react'
import MarketingCard from './MarketingCard'
import { ShoppingCartIcon, ShoppingBagIcon, TvIcon } from '@heroicons/react/24/solid'

function Careers() {
    return (
        <section className='w-full h-auto lg:h-[769px] pb-32 mt-[250px] md:mt-0'>
            <div className='max-w-[1118px] justify-center lg:mx-auto flex flex-col items-center mx-6'>
                <div className='max-w-[781px] h-[156px] text-center flex flex-col items-center justify-center mx-6 lg:mx-0'>
                    <h5 className='text-[#5865F2] font-semibold pb-6 text-xs'>Careers</h5>
                    <h2 className='font-bold text-4xl text-primary-white pb-5'>Kick-start your career with us</h2>
                    <p className='text-sm text-secondary-gray h-auto max-w-[633px]'>Start your career journey with us. Explore affiliate marketing, job opportunities, and skill-building courses for success.</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[88px] gap-10 lg:gap-20 items-center justify-center mx-auto md:mx-6'>
                    <MarketingCard
                        href='/'
                        marketIcon={<ShoppingCartIcon className='w-6 h-6' />}
                        text='Enroll in our exciting affiliate program to turn ideas into money. By promoting our services using your unique link, expand your network and receive a 15% commission on each sale that is made.'
                        title='Earn with recommending
            our services.'
                        label='Afilliate Marketing'
                    />
                    <MarketingCard
                        href='/'
                        marketIcon={<ShoppingBagIcon className='w-6 h-6' />}
                        title='Unlock your career’s potential.'
                        label='Job Market'
                        text='Join our brand new job market. Discover opportunities tailored to your ambitions and skill level, and turn every job into a rewarding experience.'
                    />
                    <MarketingCard
                        href='/'
                        marketIcon={<TvIcon className='w-6 h-6' />}
                        title='Empower your development journey.'
                        label='Courses'
                        text='Elevate your coding expertise with our new courses. Unlock a new world of learning designed to propel your skills to new heights, shaping your future in the digital landscape.'
                    />
                </div>


            </div>

        </section>
    )
}

export default Careers