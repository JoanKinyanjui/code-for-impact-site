import React from 'react';
import LogoIcon from '../svg/LogoIcon';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from "gatsby"

function BigNav() {
  return (
<div className='hidden lg:flex w-screen'>
        <header className="sticky top-0 bg-white shadow-lg w-screen">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Code for Impact
      </div>
      <div className="flex mt-4 sm:mt-0 text-blue-500">
        <AnchorLink className="px-4" href="#features">
          What it is
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Benefits
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Members
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Join us
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Blog
        </AnchorLink>
      </div>
      <div className="hidden md:block">
      <Link to="/Login">
        <button type="button" class="
        py-2 px-8
        bg-blue-500
        hover:bg-primary-darker
        rounded
        text-white"
        
        >Login</button>
        </Link>
        </div>
    </div>
  </header>
  
</div>
  )
}

export default BigNav