import * as React from 'react';
import '../styles/global.css'

const Footer = () =>{
return(
    <div className='w-screen sm:w-3/4  block md:flex mx-auto h-80 py-24 text-center text-lg'>
            <ul className='mx-auto w-1/2 md:w-1/3 pb-8 md:p-0'>
        <li className='font-semibold text-gray-900'>About Us</li>
        <li className=''>Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</li>
    </ul>
    
    <ul className='mx-auto w-1/2 md:w-1/3 pb-8 md:p-0'>
        <li className='font-semibold text-gray-900'>Important Links</li>
        <li>Terms and Conditions</li>
    </ul>
    <ul className='mx-auto w-1/2 md:w-1/3 pb-8 md:p-0'>
        <li className='font-semibold text-gray-900'>Social Media</li>
        <li>Twitter</li>
        <li>Github</li>
    </ul>
    </div>
)
}


export default Footer;