import React from 'react';
import tree from '../images/tree.png';


function BigSizeNav() {
  return (
    <div>
        <header class="sticky top-0 bg-white shadow text-blue-500"><div class="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">

<div class="flex items-center text-2xl text-black font-sans">
    <div class="w-12 mr-3">
    <img src={tree}/>
    </div>
    Code for Impact
    </div>
    <div class="flex mt-4 sm:mt-0">
        <a class="px-4" href="#features">What it is</a>
        <a class="px-4" href="#services">Benefits</a>
        <a class="px-4" href="#stats">Members</a>
        <a class="px-4" href="#testimonials">Join us</a>
        <a class="px-4" href="#testimonials">Blog</a>
        </div>
    <div class="hidden md:block">
<button type="button" class="
py-3 px-8
text-sm
bg-blue-500
hover:bg-blue-500
rounded
text-white
">Login</button>
</div></div></header> 
    </div>
  )
}

export default BigSizeNav