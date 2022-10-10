import * as React from 'react';
import tree from '../images/tree.png';
import '../styles/global.css'

const Nav = () =>{
return(
    <header class="sticky top-0 bg-white shadow text-blue-500"><div class="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div class="flex items-center text-2xl text-black"><div class="w-12 mr-3">
            <img src={tree}/>
            </div>Lander</div><div class="flex mt-4 sm:mt-0"><a class="px-4" href="#features">Features</a><a class="px-4" href="#services">Services</a><a class="px-4" href="#stats">Stats</a><a class="px-4" href="#testimonials">Testimonials</a></div>
            <div class="hidden md:block">
        <button type="button" class="
        py-3 px-8
        text-sm
        bg-blue-500
        hover:bg-blue-500
        rounded
        text-white
    ">Start Free Trial</button>
    </div></div></header>
//     <div className='w-screen  block sm:flex shadow-md font-serif fixed bg-white '>
// <div className='mx-auto sm:w-1/8 h-4 sm:h-fit '>
// <div className='border-solid mx-auto'>
//         <img  className='mx-auto sm:w-full h-10 sm:h-20 sm:h-24 md:h-29 lg:h-32 xl:h-34 ' alt='img'  src= {tree} />
//     </div>
// </div>

//     <div className='flex mx-auto w-screen sm:w-3/4'>

//     <div className='text-center text-xs sm:text-sm  md:text-base mx-auto w-screen w-full'>
//         <ul className='flex flex-row flex space-x-2 sm:space-x-8 list-none text-center justify-center mt-8 sm:mt-10 lg:mt-14'>
//             <li className=''>Features</li>
//             <li>Services</li>
//             <li>Stats</li>
//             <li>Testimonials</li>
//         </ul>
//     </div>

//     <div className='mt-8 sm:mt-10 lg:mt-14 mx-auto sm:mb-0 mb-1 '>
//     <button class="bg-blue-400 hover:bg-blue-700 hover:text-lg text-xs sm:text:sm md:text-base lg:text-lg text-white  sm:font-bold rounded  px-1 py1 md:px-6 md:py-2"> Login </button>

//     </div>

//     </div>
//     </div>
)
}


export default Nav;