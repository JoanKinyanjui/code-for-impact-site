import * as React from 'react';
import tree from '../images/tree.png';
import '../styles/global.css'

const Nav = () =>{
return(
    <div className='w-screen pb-5 flex shadow-md font-serif fixed bg-white'>
    <div className='w-1/4 '>
        <img  className=' pt-4 sm:pt-8 md:pt-4 w-1/2 sm:w-1/4 mx-auto' alt='img'  src= {tree} />
    </div>

    <div className='w-3/4 sm:w-1/2 text-center text-md sm:text-lg mt-10'>
        <ul className='flex flex-row flex space-x-5 sm:space-x-10 list-none text-center justify-center'>
            <li className=''>Features</li>
            <li>Services</li>
            <li>Stats</li>
            <li>Testimonials</li>
        </ul>
    </div>

    <div className=' self-end lg:self-start ml-auto mt-10 lg:w-1/4'>
    <button class="bg-blue-400 hover:bg-blue-700 hover:text-lg text-white  font-bold py-1 sm:py-2 px-5 sm:px-6 rounded"> Login </button>

    </div>
    </div>
)
}


export default Nav;