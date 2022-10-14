import * as React from 'react';
import pic2 from "../images/another.png";
import '../styles/global.css'

const Main = () =>{
return(
    
<div className='pt-20 md:pt-40 pb-24 '>
    <div className='container mx-auto px-8 lg:flex'>
    <div className='text-center lg:text-left lg:w-1/2'>
    <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none font-sans">Code for Impact</h1>
    <p class="text-xl lg:text-2xl mt-6 font-normal font-sans">A collaborative development community for small open source repos</p>
    <p class="mt-8 md:mt-12 py-8">
        <button type="button" class="
        py-4 px-12
        
        bg-primary
        hover:bg-primary-darker
        bg-blue-500
        rounded
        text-white
    ">Get Started</button></p>
    </div>
    <div>
    <img src={pic2}  className="lg:w-full sm:h-full mx-auto" alt="image"/>
    </div>
    </div>

</div>


)
}


export default Main;