import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo/music-tagger-logo.svg';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <div className={classes.logo}>
                    <img src={logo} alt='Music Tagger' />
                </div>
                <button className={classes.button}>Get Started</button>
            </div>
        </header>
    );
};

export default MainNavigation;