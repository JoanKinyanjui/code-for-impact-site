import * as React from 'react';
import pic2 from "../images/another.png";
import '../styles/global.css'

const Main = () =>{
return(
    

<div class="pt-20 md:pt-40"><div class="container mx-auto px-8 lg:flex"><div class="text-center lg:text-left lg:w-1/2">
    <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Code with Impact</h1>
    <p class="text-xl lg:text-2xl mt-6 font-light">Free landing page template to promote your business startup and generate leads for the offered services</p>
    <p class="mt-8 md:mt-12"><button type="button" class="
        py-4 px-12
        
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white">Get Started</button></p><p class="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div class="lg:w-1/2">
            <img src={pic2}  className="w-full" alt="image"/>
       </div>
       </div>
       </div>


)
}


export default Main;