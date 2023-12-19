import React from 'react'

function Header() {
    return (
        <section className='w-full h-[697px] relative mx-auto landingpage-filter'>
            <span className='lg:w-[300px] w-[180px] h-[200px] lg:h-[400px] left-[96px] lg:left-[76px] header-left-blob bottom-[108px] absolute'/>
            <span className='lg:w-[200px] w-[100px] h-[250px] lg:h-[300px] right-[214.5px] header-right-blob top-[68.693px] absolute'/>
            <div className='items-center pt-24 text-center max-w-xl flex flex-col mx-auto z-20'>
                <h1 className='font-extrabold text-4xl max-w-md pb-8 text-primary-white'>Create, collaborate, grow, launch</h1>
                <p className='font-semibold text-secondary-gray mx-6 lg:w-[580px] h-[80px] text-base'>We have faith in the ability to create, work together, evolve, and introduce ideas that have an impact. Come start your success with us right now.</p>
            </div>
            <div className='flex items-center justify-center gap-4 pt-10 md:pt-6 text-sm'>
                <button className='w-28 h-10 text-primary-black rounded-md bg-white hover:bg-white/70 font-semibold'>Get Started</button>
                <button className='w-28 h-10 rounded-md text-primary-white bg-white/10 font-semibold'>Learn More</button>
            </div>
            <div className='lg:w-[547px]lg:h-[271px] flex gap-2 md:gap-6 lg:gap-10 pt-20 items-center justify-center mx-auto'>
                <span>
                    <h3 className='text-primary-white text-lg font-semibold'>146+</h3>
                    <p className='text-secondary-gray text-xs'>projects done</p>
                </span>
                <div className='w-[0.6px] h-14 bg-gray-800 mx-4' />
                <span>
                    <h3 className='text-primary-white text-lg font-semibold'>100M+</h3>
                    <p className='text-secondary-gray text-xs'>lines written</p>
                </span>
                <div className='w-[0.6px] h-14 bg-gray-800 mx-4' />
                <span>
                    <h3 className='text-primary-white text-lg font-semibold'>10+</h3>
                    <p className='text-secondary-gray text-xs'>years experience</p>
                </span>
            </div>
        </section>
    )
}

export default Header