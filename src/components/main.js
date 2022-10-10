import * as React from 'react';
import pic2 from "../images/another.png";
import '../styles/global.css'

const Main = () =>{
return(
    <div className='w-screen  pt-20 md:pt-40 pb-4'>
        <div className='w-screen block lg:flex px-8 mx-auto' > 
        <div className='w-full lg:w-3/4 text-center mx-auto text-gray-900'>
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Code For Impact</h1>
        <p class="text-xl lg:text-2xl mt-6 ">Free landing page template to promote your business startup and generate leads for the offered services</p>

<div className='py-9'> 
<button class="bg-blue-400 hover:bg-blue-700 text-white  font-bold py-2 px-6  rounded mx-auto"> Get Started </button>
</div>
<i className='text-gray-600 mt-4 '>Sed fermentum felis ut cursu</i>
 </div>

 <div className='w-full sm:w-3/4 mx-auto '>  
<img src ={pic2}  className='mx-auto lg:h-max w-full' alt='img' />
 </div>
        </div>

    </div>
)
}


export default Main;