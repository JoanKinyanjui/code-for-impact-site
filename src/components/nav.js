import * as React from 'react';
import tree from '/public/static/images/tree-removebg-preview.png';
import '../styles/global.css'

const Nav = () =>{
return(
    <div className=' w-screen pb-5 flex flex-row shadow-md font-serif fixed bg-white'>
    <div className='w-1/4 '>
        <img  className='w-20 mx-auto' src= {tree} />
    </div>

    <div className='w-1/2 text-center text-lg mt-10'>
        <ul className='flex flex-row flex space-x-10 list-none text-center justify-center'>
            <li className=''>Features</li>
            <li>Services</li>
            <li>Stats</li>
            <li>Testimonials</li>
        </ul>
    </div>

    <div className='self-start ml-auto mt-10'>
    <button class="bg-blue-400 hover:bg-blue-700 text-white  font-bold py-2 px-6  rounded"> Login </button>

    </div>
    </div>
)
}


export default Nav;