import * as React from 'react';
import pic from '../images/screenshot.png';
import anotherPic from '../images/another.png';
import '../styles/global.css'

const Process = () =>{
return(
    <div className='w-screen   py-12 sm:py-24 mx-auto '>
       <div className='text-center pb-4 font-bold'>
    <h2 className=' text-3xl lg:text-4xl font-sans font-semibold text-gray-900'>Benefits</h2>
  </div>
  <div className='md:py-8 lg:w-3/4 mx-auto'>

<div id="services" class="py-20">
  <div class="container mx-auto items-center xl:flex ">
    <div class="lg:w-full ml-auto ml-8">
      <div >
      <h3 class="text-2xl md:text-3xl font-medium leading-tight mx-4 md:mx-0">For the contributor</h3>
      <p className='text-base sm:text-lg lg:text-2xl pt-4'>
    <ul className='mx-8 lg:mx-0'>
      <li className='list-disc'>An opportunity to be part of a real-life project and to learn how to navigate the coding and non-coding parts of being a coder in the real world.</li>
      <li className='list-disc'>The increased sense of purpose that comes from working with an organisation that really needs help and also does impactful work.</li>
      <li className='list-disc'>Peer support from fellow contributors on a dedicated slack channel, mentorship and guidance from the maintainers of the repos you work with.</li>
      <li className='list-disc'>A really cool, impactful learning and work experience to boast about on your CV, and a certificate detailing your work and thanking you for it, after 6 months of active contribution.</li>
      </ul>
    </p>
      </div>
      </div>
      <div class="mt-10 lg:mt-0 w-full lg:w-full undefined">
        <img  src={pic}/>
  </div>
  </div>
  </div>

  <div id="services" class="py-12 xl:py-20">
  <div class="container mx-auto items-center xl:flex xl:flex-row-reverse ">
    <div class="lg:w-full ml-auto ml-8">
      <div>
      <h3 class="text-2xl md:text-3xl font-medium leading-tight mx-4 md:mx-0">For member Organizations</h3>
      <p className='sm:text-lg text-base lg:text-2xl pt-4'>
      <ul className='mx-8 lg:mx-0'>
    <li className='list-disc'>Your repo will be featured on the Code for Impact website</li>
    <li className='list-disc'>A solution to the problem of not being able to afford to hire a number of talented coders to develop and maintain your open source repos</li>
    <li className='list-disc'>More consistent contributions to your repo, than from the wider open-source community</li>
    <li className='list-disc'>Better maintenance of quality of code and deadlines, due to robust project management, peer accountability and code review systems  </li>
  
  </ul>
  </p>
      </div>
      </div>
      <div class="mt-10 lg:mt-0 w-full lg:w-full  undefined  ">
        <img  className='mx-auto' src={anotherPic}/>
  </div>
  </div>
  </div>


 </div>
 <div className='w-screen  py-8'>
 <div className='text-center pb-8'>
      <button type="button" class="
        py-4 px-12
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white">Join us</button>
  </div>

 </div>
 </div>
)
}


export default Process;