import React from 'react'
import { GlobeIcon, LogoutIcon } from '../../assets/SvgIcons'

const Header = () => {
    return (
        <header className='px-6 py-4 border-b border-b-gray-200 flex gap-6 items-center justify-between sticky top-0 bg-white z-10'>
            <div className='text-xl sm:text-2xl font-bold'><span className='text-[#3e8be8]'>Shortify</span> <span>Link</span></div>
            <div className='flex gap-4 items-center '>
                <a className='flex gap-1.5 items-center' target='_blank' href='https://www.shortifylink.in/'>
                    <GlobeIcon />
                    <span className='text-sm font-medium hidden sm:block'>Go to Website</span>
                </a>
                <div className='flex gap-1.5 items-center'>
                    <LogoutIcon />
                    <span className='text-sm font-medium hidden sm:block'>Logout</span>
                </div>
            </div>
        </header>
    )
}

export default Header