import React, { useState } from 'react';
import { MenuData } from '../Data/MenuData';
import '../Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
    title: string;
    url: string;
    cName: string;
}

const NavBar: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(0);

    const handleClick = (): void => {
        setClicked(!clicked);
    }

    return (
        <nav className='NavBarItems'>
            <h1 className={clicked ? "hidden" : "logo"}>
                Example Personal Branding
            </h1>
            <div className='menu-icons' onClick={handleClick}>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuData.map((item: MenuItem, index: number) => {
                    return (
                        <li key={index} onClick={() => setSelected(index)}>
                            <a href={item.url} className={selected === index ? item.cName + " action" : item.cName}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
