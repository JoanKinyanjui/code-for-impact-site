import * as React from 'react';
import pic from '/public/static/images/screenshot-removebg-preview.png';
import '../styles/global.css'

const Process = () =>{
return(
    <div className='w-screen bg-blue-50 py-24 mx-auto'>
  <div className='flex py-8'>
    <div className='w-1/4 mx-auto '>
        <h5 className='text-3xl font-serif md:pb-16 pb-16'>Market Analysis</h5>
        <p className='font-serif text-lg'>Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors</p>
    </div>

    <div className='w-1/2 '>
        <img className='items-end mx-auto ' src={pic} />
    </div>
  </div>

  <div className='flex flex-row-reverse py-8'>
  <div className='w-1/4 mx-auto'>
        <h5 className='text-3xl font-serif md:pb-16 pb-16' >Search For Performance Optimization</h5>
        <p className='font-serif text-lg'>With all the information in place you will be presented with an action plan that your company needs to follow</p>
    </div>
  
    <div className='w-1/2'> 
      <img className='items-end mx-auto w-3/4 ' src={pic} /></div>
  </div>

  <div className='flex py-8'>
  <div className='w-1/4 mx-auto'>
        <h5 className='text-3xl font-serif md:pb-16 pb-16' >Design And Plan Your Business Growth Steps</h5>
        <p className='font-serif text-lg'>Once the market analysis process is completed our staff will search for opportunities that are in reach</p>
    </div>
    <div className='w-1/2'>
      <img src={pic} className='items-end mx-auto w-3/4 '  /></div>
  </div>
    </div>
)
}


export default Process;