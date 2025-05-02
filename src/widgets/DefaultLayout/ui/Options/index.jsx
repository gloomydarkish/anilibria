import React from 'react';
import { NavLink } from 'react-router-dom';

import { OPTIONS__ITEMS } from '../../model';

import stl from './index.module.scss';

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
