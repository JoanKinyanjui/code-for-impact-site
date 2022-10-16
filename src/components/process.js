import * as React from 'react';
import pic from '../images/screenshot.png';
import anotherPic from '../images/another.png';
import SplitSection from '../components/SplitSection';
import '../styles/global.css';
import SvgCharts from '../svg/SvgCharts';

const Process = () =>{
return(
<>
<div className='mx-auto w-screen text-center pt-8 sm:pt-16'>
<h2 className=' text-3xl lg:text-4xl font-sans font-semibold text-gray-900'>Benefits</h2>
</div>

<SplitSection
      reverseOrder
      primarySlot={
        <div className="container mx-auto px-8 items-center flex flex-col lg:flex-row ">
        <div className="lg:pl-8 xl:pl-16 ">
          <h3 className="text-3xl font-medium leading-tight">
            For the contributor
          </h3>
      <p className="mt-8 text-base font-sans  sm:text-lg lg:text-xl  font-normal leading-relaxed">
          <ul >
      <li className='list-disc'>An opportunity to be part of a real-life project and to learn how to navigate the coding and non-coding parts of being a coder in the real world.</li>
      <li className='list-disc'>The increased sense of purpose that comes from working with an organisation that really needs help and also does impactful work.</li>
      <li className='list-disc'>Peer support from fellow contributors on a dedicated slack channel, mentorship and guidance from the maintainers of the repos you work with.</li>
      <li className='list-disc'>A really cool, impactful learning and work experience to boast about on your CV, and a certificate detailing your work and thanking you for it, after 6 months of active contribution.</li>
      </ul>
          </p>
        </div>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

<SplitSection className="flex"
      id="services"
      primarySlot={
        <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row order-last lg:order-first">
        <div className="lg:pr-4 xl:pr-8">
          <h3 className="text-3xl font-medium leading-tight">For member organizations</h3>
          <p className="mt-8 text-base  font-sans sm:text-lg lg:text-xl font-normal leading-relaxed">
          <ul >
    <li className='list-disc'>Your repo will be featured on the Code for Impact website</li>
    <li className='list-disc'>A solution to the problem of not being able to afford to hire a number of talented coders to develop and maintain your open source repos</li>
    <li className='list-disc'>More consistent contributions to your repo, than from the wider open-source community</li>
    <li className='list-disc'>Better maintenance of quality of code and deadlines, due to robust project management, peer accountability and code review systems  </li>
  
  </ul>
          </p>
        </div>
        </div>
      }
      secondarySlot={<SvgCharts />}

      
    />
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



</>
)
}


export default Process;