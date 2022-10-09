import * as React from 'react';
import pic2 from "../images/screenshot.png";
import '../styles/global.css'

const Main = () =>{
return(
    <div className='w-screen font-serif  block sm:flex   pt-32 sm:pt-38 md:pt-48 pb-12 '>
 <div className='w-full sm:w-1/2 text-center'>
<h3 className=' text-5xl md:text-7xl text-sky-400 pb-12 font-bold pt-8'>Code For Impact</h3>
<p className='pb-7  text-lg sm:text-xl'>
Free landing page template to promote your business startup and generate leads for the offered services
</p>

<div className='py-9'> 
<button class="bg-blue-400 hover:bg-blue-700 text-white  font-bold py-2 px-6  rounded mx-auto"> Get Started </button>
</div>
<i className='text-slate-400 py-1'>Sed fermentum felis ut cursu</i>
 </div>

 <div className='w-full sm:w-1/2 '>  
<img src ={pic2}  className='mx-auto' alt='img' />
 </div>
    </div>
)
}


export default Main;