import * as React from 'react';
import {useState} from "react";
import tree from '../images/tree.png';
import '../styles/global.css';
import BigSizeNav from './bigSizeNav';
import SmallSizeNav from './smallSizeNav';

function Nav(){
    return(
<>
            
        { window.innerWidth > 1100 ? <BigSizeNav /> : <SmallSizeNav /> }

</>
    )
}

export default Nav;

