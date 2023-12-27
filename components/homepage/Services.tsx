import React from 'react'
import ServicesCard from './ServicesCard'
import software from '../../../public/assets/software-services.png'
import host from '../../../public/assets/host-services.png'
import web from '../../../public/assets/web-services.png'

function Services() {
    return (
        <section className='w-full h-full lg:h-[844px] bg-black px-6 flex-col flex'>
            
           
                <div className='flex flex-col mt-36 mx-8 lg:px-20'>
                    <h5 className='text-[#5865F2] font-semibold pb-6  text-xs'>Services</h5>
                    <h2 className='font-bold text-4xl text-primary-white'>Let us take care of your work</h2>
                    <p className='text-sm text-secondary-gray max-w-[633px] mt-5'>Start your career journey with us. Explore affiliate marketing, job opportunities, and skill-building courses for success.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 mx-auto items-center justify-center'>
                    <ServicesCard href='/' heading='Software Services' text='From simple automations to sophisticated algorithms.' image={software}/>
                    <ServicesCard href='/' heading='Web Services' text='Boost your online presence with a professional website.' image={web}/>
                    <ServicesCard href='/' heading='Host Services' text='Keep your website or software online and protected.'  image={host}/>
                </div>
        
        </section>
    )
}

export default Services