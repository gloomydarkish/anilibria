import React from 'react';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss';

import { OPTIONS__ITEMS } from '@/widgets/DefaultLayout/model/index.js';

const Options = () => {
    return (
        <ul className={stl.options}>
            {OPTIONS__ITEMS?.map(({ icon, to }, idx) => (
                <li key={idx}>
                    <NavLink key={to} className={stl.options__item} to={to}>
                        {icon}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Options;
