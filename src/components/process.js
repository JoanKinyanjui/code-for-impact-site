import * as React from 'react';
import pic from '../images/screenshot.png';
import '../styles/global.css'

const Process = () =>{
return(
    <div className='w-screen  bg-blue-50 py-16 sm:py-24 mx-auto '>
  <div className='block md:flex py-8 lg:w-3/4 mx-auto'>
  <div class=""><h3 class="text-3xl font-semibold leading-tight">Design And Plan Your Business Growth Steps</h3>
  <p class="mt-8 text-xl font-light leading-relaxed w-3/4">Once the market analysis process is completed our staff will search for opportunities that are in reach</p></div>

    <div className='w-full md:w-full '>
        <img className='items-end mx-auto pt-8 lg:pt-1 w-full lg:w-3/4' alt='img' src={pic} />
    </div>
  </div>

  <div className='block md:flex flex-row-reverse py-8 lg:w-3/4 mx-auto'>
  <div class=""><h3 class="text-3xl font-semibold leading-tight">Design And Plan Your Business Growth Steps</h3>
  <p class="mt-8 text-xl font-light leading-relaxed md:w-3/4">Once the market analysis process is completed our staff will search for opportunities that are in reach</p></div>
  
  
    <div className='w-full md:w-full lg:w-3/4'> 
      <img className='items-end mx-auto pt-8 lg:pt-1 w-full' alt='img'  src={pic} /></div>
  </div>

  <div className='block md:flex py-8 lg:w-3/4 mx-auto'>
  <div class=""><h3 class="text-3xl font-semibold leading-tight">Design And Plan Your Business Growth Steps</h3>
  <p class="mt-8 text-xl font-light leading-relaxed w-3/4">Once the market analysis process is completed our staff will search for opportunities that are in reach</p></div>
    <div className='w-full md:w-full'>
      <img src={pic} className=' items-end mx-auto pt-8 lg:pt-1 w-full lg:w-3/4' alt='img'   /></div>
  </div>
    </div>
)
}


export default Process;