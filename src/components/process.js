import * as React from 'react';
import pic from '../images/screenshot.png';
import '../styles/global.css'

const Process = () =>{
return(
    <div className='w-screen  bg-blue-50 py-16 sm:py-24 mx-auto '>
       <div className='text-center pb-7 font-bold'>
    <h2 className=' text-3xl lg:text-4xl font-serif text-bold text-gray-900'>Benefits</h2>
  </div>
  <div className='block md:flex py-8 lg:w-3/4 mx-auto'>
  <div class=""><h3 class="text-3xl font-semibold leading-tight">For The Contributor</h3>
  <p class="mt-8 text-xl font-light leading-relaxed w-3/4">
    <ul>
      <li className='list-disc'>An opportunity to be part of a real-life project and to learn how to navigate the coding and non-coding parts of being a coder in the real world.</li>
      <li className='list-disc'>The increased sense of purpose that comes from working with an organisation that really needs help and also does impactful work.</li>
      <li className='list-disc'>Peer support from fellow contributors on a dedicated slack channel, mentorship and guidance from the maintainers of the repos you work with.</li>
      <li className='list-disc'>A really cool, impactful learning and work experience to boast about on your CV, and a certificate detailing your work and thanking you for it, after 6 months of active contribution.</li>
      </ul>
      </p>
    </div>

    <div className='w-full md:w-full '>
        <img className='items-end md:ml-0 pt-8 lg:pt-1 w-full lg:w-3/4' alt='img' src={pic} />
    </div>
  </div>

  <div className='block md:flex flex-row-reverse py-8 lg:w-3/4 mx-auto '>
  <div className="ml-auto md:ml-24"><h3 class="text-3xl font-semibold leading-tight ">For Member Organization</h3>
  <p class="mt-8 text-xl font-light leading-relaxed w-3/4">
   <ul>
    <li className='list-disc'>Your repo will be featured on the Code for Impact website</li>
    <li className='list-disc'>A solution to the problem of not being able to afford to hire a number of talented coders to develop and maintain your open source repos</li>
    <li className='list-disc'>More consistent contributions to your repo, than from the wider open-source community</li>
    <li className='list-disc'>Better maintenance of quality of code and deadlines, due to robust project management, peer accountability and code review systems  </li>
    
  </ul>
    </p></div>
  
  
    <div className='w-full md:w-full lg:w-3/4 mx-auto md:mr-24'> 
      <img className='items-end pt-8 lg:pt-1 w-full md:mx-auto ' alt='img'  src={pic} /></div>
  </div>

 <div className='w-screen'>
 <div className='text-center pb-8'>
      <button type="button" class="
        py-4 px-12
        
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white">Join US</button>
  </div>

 </div>
    </div>
)
}


export default Process;