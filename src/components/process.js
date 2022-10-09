import * as React from 'react';
import pic from '../images/screenshot.png';
import '../styles/global.css'

const Process = () =>{
return(
    <div className='w-screen bg-blue-50 py-16 sm:py-24 mx-auto'>
  <div className='block md:flex py-8'>
    <div className='w-3/4 md:w-1/2 mx-auto text-center '>
        <h5 className='text-3xl font-serif md:pb-16 pb-16 pt-24'>Market Analysis</h5>
        <p className='font-serif text-xl'>Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors</p>
    </div>

    <div className='w-full md:w-1/2 '>
        <img className='items-end mx-auto pt-8 lg:pt-1 w-3/4' alt='img' src={pic} />
    </div>
  </div>

  <div className='block md:flex flex-row-reverse py-8'>
  <div className='w-3/4 md:w-1/2 mx-auto text-center '>
        <h5 className='text-3xl font-serif md:pb-16 pb-16 pt-24' >Search For Performance Optimization</h5>
        <p className='font-serif text-xl'>With all the information in place you will be presented with an action plan that your company needs to follow</p>
    </div>
  
    <div className='w-full md:w-1/2'> 
      <img className='items-end mx-auto pt-8 lg:pt-1 w-3/4' alt='img'  src={pic} /></div>
  </div>

  <div className='block md:flex py-8'>
  <div className='w-3/4 md:w-1/2 mx-auto text-center '>
        <h5 className='text-3xl font-serif md:pb-16 pb-16 pt-24' >Design And Plan Your Business Growth Steps</h5>
        <p className='font-serif text-xl'>Once the market analysis process is completed our staff will search for opportunities that are in reach</p>
    </div>
    <div className='w-full md:w-1/2'>
      <img src={pic} className=' items-end mx-auto pt-8 lg:pt-1 w-3/4' alt='img'   /></div>
  </div>
    </div>
)
}


export default Process;