import React from 'react'
import { FaBars, FaCalendarCheck, FaCheckCircle, FaEnvelope, FaHome, FaInfoCircle, FaUserCircle } from 'react-icons/fa'

function Header() {
    return (
        <>
            <header className="bg-white text-gray-800 p-4 shadow-md fixed top-0 right-0 left-0 ">
                <div className="flex justify-between items-center px-16">
                    
                    {/* Left Side */}
                    <div className="flex justify-between items-center gap-8">
                        <h1 className="text-2xl font-bold text-[#246e73]">Finance Software</h1>

                        <div className='lg:flex lg:items-center lg:gap-1 hidden cursor-pointer'>
                            <FaHome />
                            <p className="text-[13px]">Home</p>
                        </div>
                        <div className='lg:flex lg:items-center lg:gap-1 hidden cursor-pointer'>
                            <FaEnvelope />
                            <p className="text-[13px]">Contact Us</p>
                        </div>
                        <div className='lg:flex lg:items-center lg:gap-1 hidden cursor-pointer'>
                            <FaCheckCircle />
                            <p className="text-[13px]">Web Check-in</p>
                        </div>
                        <div className='lg:flex lg:items-center lg:gap-1 hidden cursor-pointer'>
                            <FaCalendarCheck />
                            <p className="text-[13px]">View Booking</p>
                        </div>
                        <div className='lg:flex lg:items-center lg:gap-1 hidden cursor-pointer'>
                            <FaInfoCircle />
                            <p className="text-[13px]">About Us</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <div className="lg:flex lg:items-center lg:gap-1 hidden border border-gray-300 px-2 py-2 rounded-lg cursor-pointer">
                            <FaUserCircle />
                            <p>Manage Account</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
