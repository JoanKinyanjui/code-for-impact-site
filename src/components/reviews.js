import * as React from 'react';
import { feedback } from './feedback';
import '../styles/global.css'



const Reviews = () =>{
return(
    <div className='w-screen bg-blue-50 ' >
<h5 className='text-center font-serif text-2xl text-slate-500'>WHAT CUSTOMERS ARE SAYING...</h5>
<div className='flex flex-wrap text-center py-16'>
    {feedback.map((review,index)=>(
        <div key={review.id} className="w-80 mx-auto py-8">
            <title>{review.title}</title>
            <p>{review.feedback}</p>
        <div className='flex '>      
        <img src={review.image} className='rounded-full w-20 h-20'/>      
        <i className='pt-8 px-4 '><p>{review.name}</p></i>
        </div>
        </div>
    ))}
</div>
    </div>
)
}


export default Reviews;