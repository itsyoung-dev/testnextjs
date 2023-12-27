import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/tns_logo_white_black.png'
import Link from 'next/link'

interface linkProps {
    name: string,
    href: string
}

const solutionLinks: linkProps[] = [
    { name: 'Reciple', href: '/' },
    { name: 'Websites', href: '/' }, 
    { name: 'Software', href: '/' },
    { name: 'Hosting', href: '/' }  
];
const companyLinks: linkProps[] = [
    { name: 'About', href: '/' },
    { name: 'Membership', href: '/' }, 
    { name: 'Jobs', href: '/' }, 
    { name: 'Hosting', href: '/' }   
];
const communityLinks: linkProps[] = [
    { name: 'Youtube', href: '/' },
    { name: 'Github', href: '/' }, 
    { name: 'Discord', href: '/' },
];
const legalLinks: linkProps[] = [
    { name: 'Claim', href: '/' },
    { name: 'Privacy', href: '/' },
    { name: 'Terms', href: '/' }, 
];

const today = new Date(Date.now()).getFullYear()


function Footer() {
    return (
        <div className='w-full h-[371px] mx-6 lg:mx-auto'>
            <div className='mt-10 lg:mx-[200px] flex items-center justify-center border-b-[1px] border-primary-white/10'>
                <div className='lg:pr-[150px]'>
                    <Image alt='logo' src={Logo} className='w-10 h-10' />
                    <p className='mt-5 text-secondary-gray text-sm max-w-[265px]'>Making the world a better place through constructing elegant hierarchies.</p>
                </div>
                <div className='flex gap-6 md:gap-16 lg:gap-28 mb-8 text-xs md:text-sm flex-wrap'>
                    <div className='  text-white flex flex-col gap-2'>
                        <h5><strong>Solutions</strong></h5>
                        {solutionLinks.sort().map((link) => (
                            <Link className='text-[#A1A1A1]' href={link.href} key={link.name}>{link.name}</Link>
                        ))}
                    </div>
                    <div className=' text-white flex flex-col gap-2'>
                        <h5><strong>Company</strong></h5>
                        {companyLinks.sort().map((link) => (
                            <Link className='text-[#A1A1A1]' href={link.href} key={link.name}>{link.name}</Link>
                        ))}
                    </div>
                    <div className=' text-white flex flex-col gap-2'>
                        <h5><strong>Community</strong></h5>
                        {communityLinks.sort().map((link) => (
                            <Link className='text-[#A1A1A1]' href={link.href} key={link.name}>{link.name}</Link>
                        ))}
                    </div>
                    <div className=' text-white flex flex-col gap-2'>
                        <h5><strong>Legal</strong></h5>
                        {legalLinks.sort().map((link) => (
                            <Link className='text-[#A1A1A1]' href={link.href} key={link.name}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <p className='lg:ml-48 max-w-[360px] text-sm text-secondary-gray mt-8'>© {today} The North Solution. All rights reserved.</p>

        </div>
    )
}

export default Footer
