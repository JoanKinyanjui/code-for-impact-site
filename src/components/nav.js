import * as React from 'react';
import '../styles/global.css';
import BigNav from './BigNav';
import DropDownNav from './DropDownNav';


function Nav(){
    return(
<>
<BigNav className="" />
<DropDownNav className="hidden" />
</>
    )
}

export default Nav;

