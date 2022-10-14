import * as React from 'react';
import { feedback } from './feedback';
import '../styles/global.css'



const Reviews = () =>{
return(
    <div className='w-screen  ' >
<h5 className='text-center font-sans text-2xl text-slate-500 py-2 sm:py-4 md:py-8'>WHAT CUSTOMERS ARE SAYING</h5>
<div className='flex flex-wrap text-center py-4 sm:py-8 md:py-16 w-3/4 mx-auto'>
    {feedback.map((review,index)=>(
        <div key={review.id} className="w-screen md:w-full mx-auto  px-1  max-w-sm rounded overflow-hidden shadow-md md:pb-8  mx-auto text-center py-7">
            <title>{review.title}</title>
            <p>{review.feedback}</p>
        <div className='flex '>      
        <img src={review.image} className='rounded-full w-20 h-20'/>   
       
      <div className='block text-left'>
      <p className='pt-8 px-2 font-sans'><p>{review.name}</p></p>
        <i className='text-sm text-gray-500'>{review.career}</i>   
      </div>
        </div>
        </div>
    ))}
</div>
    </div>
)
}


export default Reviews;