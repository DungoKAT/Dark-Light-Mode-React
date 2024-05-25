import React from 'react';
import { useContext } from 'react';

import { ThemeContext } from '../App';
import LightLogo from '../image/light.svg'
import DarkLogo from '../image/dark.svg'


const Content = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <main>
            <div>
                <h1 className={theme === 'dark' ? 'white-text' : 'black-text'}>Punnaphat DungoKAT</h1>
                <p className={theme === 'dark' ? 'orange-text' : 'black-text'}>Dark Light Mode</p>
            </div>
            <img src={theme === 'dark' ? DarkLogo : LightLogo} alt='logo'/>
        </main>
    );
};

export default Content;