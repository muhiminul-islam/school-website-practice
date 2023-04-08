import React from 'react';
import { PhoneIcon, ClockIcon, MapPinIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='flex justify-around mt-7 bg-gray-100'>
            <div className='flex items-center gap-3'>
                <AcademicCapIcon className="h-15 w-15 text-orange-500" />
                <div>
                    <h2 className='text-2xl font-bold text-orange-800'>React
                        <span><small> School</small></span>
                    </h2>
                </div>
            </div>
            <div className='flex justify-evenly gap-20'>
                <div className='flex items-center gap-2'>
                    <PhoneIcon className="h-6 w-6 text-orange-500" />
                    <div>
                        <h5>Call</h5>
                        <p>+23467463</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <ClockIcon className="h-6 w-6 text-orange-500" />
                    <div>
                        <h5>Work Time</h5>
                        <p>Mon - Fri 8 AM - 5 PM</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <MapPinIcon className="h-6 w-6 text-orange-500" />
                    <div>
                        <h5>Address</h5>
                        <p>Franklin St</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;