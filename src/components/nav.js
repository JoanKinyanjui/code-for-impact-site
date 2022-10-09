import * as React from 'react';
import tree from '../images/tree.png';
import '../styles/global.css'

const Nav = () =>{
return(
    <div className='w-screen  block sm:flex shadow-md font-serif fixed bg-white '>
<div className='mx-auto sm:w-1/8  '>
<div className='border-solid mx-auto'>
        <img  className='mx-auto sm:w-full h-10 sm:h-20 sm:h-24 md:h-29 lg:h-32 xl:h-34 ' alt='img'  src= {tree} />
    </div>
</div>

    <div className='flex mx-auto w-screen sm:w-3/4'>

    <div className='text-center text-xs sm:text-sm  md:text-base mx-auto w-screen w-full'>
        <ul className='flex flex-row flex space-x-2 sm:space-x-8 list-none text-center justify-center mt-8 sm:mt-10 lg:mt-14'>
            <li className=''>Features</li>
            <li>Services</li>
            <li>Stats</li>
            <li>Testimonials</li>
        </ul>
    </div>

    <div className='mt-8 sm:mt-10 lg:mt-14 mx-auto sm:mb-0 mb-1 '>
    <button class="bg-blue-400 hover:bg-blue-700 hover:text-lg text-sm text-white  sm:font-bold rounded  px-1 py1 md:px-6 md:py-2"> Login </button>

    </div>

    </div>
    </div>
)
}


export default Nav;