import * as React from 'react';
import pic2 from "../images/another.png";
import '../styles/global.css'
import HeroImage from '../svg/HeroImage';

const Main = () =>{
return(
    
    <div className="pt-20 md:pt-40 py-24 pb-36">
    <div className="container mx-auto px-8 lg:flex">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          Code for Impact
        </h1>
        <p className="text-base  sm:text-lg lg:text-xl  mt-6 font-normal">
        A collaborative development community for small open source repos
        </p>
        <p className="mt-8 md:mt-12">
        <button type="button" class="
        py-4 px-12
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white">Learn more</button>
        </p>
      </div>
      <div className="lg:w-1/2">
        <HeroImage />
      </div>
    </div>
  </div>


)
}


export default Main;