import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }
, []); 
    window.addEventListener('resize', showButton);

    return (
        <>
        <BrowserRouter>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu} path='/home'>
                        Visit Canada <i class="fab fa-canadian-maple-leaf"/>
                    </Link>
                    <div className='menu-icon' onClick={ handleClick }>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/explore' className='nav-links' onClick={closeMobileMenu} >
                                Explore
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/covid' className='nav-links' onClick={closeMobileMenu}>
                                COVID
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/learn-more' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Learn More
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'> Learn More </Button>}
                </div>
            </nav>
            </BrowserRouter>
        </>
    );
}

export default Navbar;
