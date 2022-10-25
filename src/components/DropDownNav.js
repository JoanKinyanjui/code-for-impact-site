import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Drawer from '@material-ui/core/Drawer';
import { Button, List, ListItem } from '@material-ui/core';
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LogoIcon from '../svg/LogoIcon';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "gatsby"

function DropDownNav() {

  

const [state,setState] = useState(false);
const toggleDrawer = (open)=>(event)=>{
    setState(open)
}
const list = ()=>(
    
<div className='w-64 h-screen overflow-hidden'>
<div className='bg-blue-100 w-full h-full text-base '>
         <List className="block h-screen text-blue-500">
        <ListItem className="my-4 ml-40" href="#features">
        <Button  onClick={toggleDrawer(false)}> <CloseIcon  style={{color:'DodgerBlue'}} fontSize="large" /> </Button>
        </ListItem>
        <ListItem className="my-4" href="#features">
          What it is
        </ListItem>
        <ListItem className="my-4" href="#features">
          What it is
        </ListItem>
        <ListItem className=" my-4" href="#services">
          Benefits
        </ListItem>
        <ListItem className="my-4 " href="#stats">
          Members
        </ListItem>
        <ListItem className=" my-4" href="#testimonials">
          Join us
        </ListItem>
        <ListItem className="my-4 " href="#testimonials">
          Blog
        </ListItem>
        <ListItem  className='absolute bottom-0 mb-6 '>
        <div >
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
        </ListItem>
      </List>
    </div>
</div>
)
  return (
    <div className='block lg:hidden'>
    <header className="sticky top-0 bg-white shadow-lg">
    <div className="container flex  sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Code for Impact
      </div>
   

  
<Button  onClick={toggleDrawer(true)}> <DehazeIcon  style={{color:'DodgerBlue'}}  fontSize="large" /> </Button>
<Drawer 
anchor={'right'}
open={state}
onClose={toggleDrawer(false)}
>
{list()}
</Drawer>
    </div>
  </header>


</div>

  )
}

export default DropDownNav