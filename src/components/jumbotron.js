import *  as React from 'react';
import '../styles/global.css'


const Jumbotron = ()=>{
    return(
        <div className='w-screen py-12 '>
<div className='w-1/2  text-center font-serif mx-auto h-60 shadow-lg rounded-md  bg-blue-50 '  >
<div className='tex-center py-16'>
<h3 className='font-bold text-2xl pb-4'>Ready to Grow Your business</h3>
            <p className='py-4'> Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in</p>
            <button class="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4   rounded mx-auto"> Get Started Now </button>
</div>
</div>
        </div>
    )
}

export default Jumbotron;