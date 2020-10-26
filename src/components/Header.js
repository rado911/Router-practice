import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <ul className='Header'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/HTML'>HTML</Link></li>
            <li><Link to='/CSS'>CSS</Link></li>
            <li><Link to='/js'>JavaScript</Link></li>
        </ul>
    )
}

export default Header;