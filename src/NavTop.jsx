import React from 'react';
import { Link } from 'react-router-dom';


const NavTop = () => {
    return(
        <nav> 
            <Link to="/"><i class="fa-solid fa-gamepad"></i></Link>       
        </nav>
    )
}

export default NavTop