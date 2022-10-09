import * as React from 'react';
import tree from '../images/tree.png';
import '../styles/global.css'

const Nav = () =>{
return(
    <div className='w-screen pb-5 flex shadow-md font-serif fixed bg-white'>
    <div className='w-1/4 '>
        <img  className=' pt-8 sm:pt-8 md:pt-4 w-full sm:w-1/2 mx-auto' alt='img'  src= {tree} />
    </div>

    <div className='w-3/4 sm:w-1/2 text-center text-sm sm:text-lg mt-16 sm:mt-10'>
        <ul className='flex flex-row flex space-x-3 sm:space-x-10 list-none text-center justify-center'>
            <li className=''>Features</li>
            <li>Services</li>
            <li>Stats</li>
            <li>Testimonials</li>
        </ul>
    </div>

    <div className=' self-end lg:self-start ml-auto mt-10 w-1/8 lg:w-1/4'>
    <button class="bg-blue-400 hover:bg-blue-700 hover:text-lg text-sm text-white  sm:font-bold py-0 sm:py-2 px-2 sm:px-6 rounded"> Login </button>

    </div>
    </div>
)
}


export default Nav;