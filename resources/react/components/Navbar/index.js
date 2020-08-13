import React, { useState } from 'react';
import './Navbar.css';

import { Link, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { MdMenu, MdClose } from 'react-icons/md';


const ButtonToOpen = ({ icon = <MdMenu />, className = 'black', onClick }) => <button className={`ButtonToOpen ${className}`} onClick={onClick}>{icon}</button>;
const ButtonToClose = ({ icon = <MdClose />, className = 'black', onClick }) => <button className={`ButtonToClose ${className}`} onClick={onClick}>{icon}</button>;

const Navbar = () => {
    // const { pathname } = props.location;
    const { pathname } = useLocation();
    const color = (pathname === "/") ? 'white' : 'black';

    /** false -> close, true -> open */
    const [toggle, setToggle] = useState(false);

    /** transition */
    const transitions = useTransition(toggle, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return transitions.map(({ item, key, props }) =>
        !item
            ? <animated.div key={key} className="Navbar" style={props}>
                <ButtonToOpen onClick={() => setToggle(true)} className={color} />
            </animated.div>
            : <animated.div key={key} className="Navbar" style={props}>
                <ButtonToClose className={`${color}`} onClick={() => setToggle(false)} />
                <Link to="/about" className={`${color}`} onClick={() => setToggle(false)}>About</Link>
                <Link to="/contact" className={`${color}`} onClick={() => setToggle(false)}>Contact</Link>
                <Link to="/projects" className={`${color}`} onClick={() => setToggle(false)}>Projects</Link>
            </animated.div>
    )
}

export default Navbar;
