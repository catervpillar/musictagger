import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo/music-tagger-logo.svg';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <Link to="/" >
                    <div className={classes.logo}>
                        <img src={logo} alt='Music Tagger' />
                    </div>
                </Link>
                <NavLink to="/tagger">
                    <button className={classes.button}>Get Started</button>
                </NavLink>
            </div>
        </header>
    );
};

export default MainNavigation;