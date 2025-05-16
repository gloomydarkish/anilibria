import React from 'react';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss';

import { NAVIGATIONS__ITEMS } from '@/widgets/DefaultLayout/model/index.js';

const DefaultLayoutFooter = () => {
    return (
        <nav className={stl.navigation}>
            <ul className={stl.navigation__wrapper}>
                <h3>НАВИГАЦИЯ</h3>
                {NAVIGATIONS__ITEMS?.map((item, idx) => (
                    <li key={idx}>
                        <NavLink className={stl.navigation__link} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DefaultLayoutFooter;
