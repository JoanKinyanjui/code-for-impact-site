import * as React from 'react';
import tree from '../images/tree.png';
import '../styles/global.css'

const Nav = () =>{
return(
    <div className='w-screen  flex shadow-md font-serif fixed bg-white '>
    <div className='border-solid mx-auto'>
        <img  className='mx-auto w-3/4  sm:w-full h-20 sm:h-24 md:h-29 lg:h-32 xl:h-34 ' alt='img'  src= {tree} />
    </div>

    <div className='text-center text-sm sm:text-lg   mx-auto'>
        <ul className='flex flex-row flex space-x-3 sm:space-x-10 list-none text-center justify-center mt-8 sm:mt-10 lg:mt-14'>
            <li className=''>Features</li>
            <li>Services</li>
            <li>Stats</li>
            <li>Testimonials</li>
        </ul>
    </div>

    <div className='mt-8 sm:mt-10 lg:mt-14 mx-auto'>
    <button class="bg-blue-400 hover:bg-blue-700 hover:text-lg text-sm text-white  sm:font-bold rounded  px-1 py1 md:px-6 md:py-2"> Login </button>

    </div>
    </div>
)
}


export default Nav;