import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div className='text-2xl flex gap-14 ml-44 font-bold'>
                <Link className='hover:text-rose-600' to='/home'>Home</Link>
                <Link className='hover:text-rose-600' to='/about'>About</Link>
                <Link className='hover:text-rose-600' to='/classes'>Classes</Link>
                <Link className='hover:text-rose-600' to='/teachers'>Teachers</Link>
                <Link className='hover:text-rose-600' to='/blog'>Blog</Link>
                <Link className='hover:text-rose-600' to='/contacts'>Contacts</Link>
            </div>
            <div className='flex gap-3 mr-44'>
                <img className='w-7 h-7' src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
                <img className='w-7 h-7 rounded' src="https://img.freepik.com/free-icon/linkedin-logo-with-rounded-corners_318-9541.jpg" alt="" />
                <img className='h-7 w-7' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/insta_1.jpg?size=690:388" alt="" />
            </div>
        </div>
    );
};

export default Navbar;