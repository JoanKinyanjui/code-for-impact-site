import * as React from 'react';
import '../styles/global.css';
import tree from '../images/screenshot.png';

const Features = () =>{
return(
<div className='bg-blue-100  w-screen '>
<div className=' py-20 lg:pb-40 lg-pt-48 sm:py-24 md:py-32 container mx-auto text-center leading-none  '>
  <div className='text-center pb-7 font-bold'>
    <h2 className='text-3xl font-sans font-semibold text-gray-900'>What it is</h2>
  </div>

  <div className='text-base  sm:text-lg lg:text-xl  font-light w-full md:w-3/4    mx-auto '>
<p className='mx-8 md:mx-0'>

There are many small not-for-profits and social enterprises that maintain and use their own open-source repos to do a lot of impactful work.
   However, they can neither afford to hire a large number of coders to develop and maintain their projects, nor do they get the same support from the 
   open source community that large or famous open-source repos do. Code for Impact aims to bring such small social-impact-based organisations and their
    open source repos under one roof. Contributors can either browse through the repos and decide to contribute by themselves, or contribute by enrolling 
    to contribute via Code for Impact. Enrolling to contribute through Code for Impact gives the contributor access to project management tools, guidance from the
     repo’s lead developer, peer-support via a slack channel, and after 6 months of active contribution, a certificate mentioning their contribution and thanking 
     them for it. Enrolling to contribute through Code for Impact also gives the member organisation the ability to receive contributions in a predictable manner.
      This website and the Code for Impact project is maintained jointly and cooperatively by member organisations.

</p>

  </div>
 
</div>
</div>
)
}


export default Features;