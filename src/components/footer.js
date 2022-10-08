import * as React from 'react';
import '../styles/global.css'

const Footer = () =>{
return(
    <div className='w-screen flex mx-auto h-80 py-24 text-center'>
    <ul className='mx-auto w-1/3'>
        <li className='font-bold text-slate-600'>About Us</li>
        <li className=''>Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</li>
    </ul>
    
    <ul className='mx-auto w-1/3'>
        <li className='font-bold text-slate-600'>Important Links</li>
        <li>Terms and Conditions</li>
    </ul>
    <ul className='mx-auto w-1/3'>
        <li className='font-bold text-slate-600'>Social Media</li>
        <li>Twitter</li>
        <li>Github</li>
    </ul>
    </div>
)
}


export default Footer;