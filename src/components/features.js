import * as React from 'react';
import '../styles/global.css';
import tree from '/public/static/images/another-removebg-preview.png';

const Features = () =>{
return(
  <div className=' py-16 sm:py-24 md:py-32'>
  <div className='text-center pb-7 font-bold'>
    <h2 className='text-3xl font-serif text-bold text-blue-400'>Main Features</h2>
  </div>

  <div className='block lg:flex items-center'>

  <div className='max-w-sm rounded overflow-hidden shadow-lg w-full lg:w-1/3 mx-auto text-center py-7'>
  <img class="w-full" src={tree} alt="Sunset in the mountains"/>
    <h6 className='italic font-bold text-xl mb-2 font-serif'>Service One</h6>
    <p className='text-gray-700 text-base pb-4 text-xl'>An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.</p>
  </div>

  <div className='max-w-sm rounded overflow-hidden shadow-lg w-full lg:w-1/3 mx-auto text-center py-7'>
  <img class="w-full" src={tree} alt="Sunset in the mountains"/>
    <h6 className='font-bold text-xl italic mb-2 font-serif'> Service Two</h6>
    <p className='text-gray-700 text-base pb-4 text-xl'>An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.</p>
  </div>

  <div className='max-w-sm rounded overflow-hidden shadow-lg w-full lg:w-1/3 pb-8 mx-auto text-center py-7' >
  <img class="w-full" src={tree} alt="Sunset in the mountains"/>
    <h6 className='font-bold  italic text-xl mb-2 font-serif text-xl'>Service Three</h6>
    <p className='text-gray-700 text-base pb-4'> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.</p>
  </div>

  </div>
  </div>
)
}


export default Features;