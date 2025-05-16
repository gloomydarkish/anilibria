import React from 'react';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss';

import { USERS__ITEMS } from '@/widgets/DefaultLayout/model/index.js';

const DefaultLayoutFooter = () => {
    return (
        <nav className={stl.user}>
            <ul className={stl.user__wrapper}>
                <h3>ПОЛЬЗОВАТЕЛЬ</h3>
                {USERS__ITEMS?.map((item, idx) => (
                    <li key={idx}>
                        <NavLink className={stl.user__link} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DefaultLayoutFooter;
