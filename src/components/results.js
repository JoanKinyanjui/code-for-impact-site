import * as React from 'react';
import '../styles/global.css'


const Results = () =>{
   const[num,setNum]=React.useState(0);

   React.useEffect(() => {
      num < 100 && setTimeout(() => setNum(num + 1), 200);
    }, [num]);
    

return(
    <div className=' py-24 w-full lg:w-3/4 mx-auto '  >
 <ul className='flex flex-row mx-8 lg:mx-0 flex-wrap'>
    <li className='mx-auto'>
    <div className='text-center'>
    <p className='font-medium lg:font-bold text-blue-500 text-2xl sm:text-5xl md:text-7xl pb-4 '>+ {num} %</p>
    <p> Stats Information</p>
   </div>
    </li>

    <li className='mx-auto'>
    <div className='text-center'>
    <p className='font-medium lg:font-bold text-blue-500 text-2xl sm:text-5xl md:text-7xl pb-4'>+ {num}%</p>
    <p> Stats Information</p>
   </div>
    </li>

    <li className='mx-auto'>
    <div className='text-center'>
    <p className='font-medium lg:font-bold text-blue-500 text-2xl sm:text-5xl md:text-7xl pb-4'>+ {num}%</p>
    <p> Stats Information</p>
   </div>
    </li>
 </ul>
    </ div>
)
}


export default Results;