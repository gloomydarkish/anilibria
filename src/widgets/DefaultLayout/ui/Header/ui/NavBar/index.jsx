import React from 'react';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss';

import { NAV_ITEMS } from '@/widgets/DefaultLayout/model/index.js';

const DefaultLayoutHeader = () => {
    return (
        <nav className={stl.nav}>
            <ul className={stl.nav__wrapper}>
                {NAV_ITEMS?.map((item, idx) => (
                    <li key={idx}>
                        <NavLink className={stl.nav__link} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DefaultLayoutHeader;
