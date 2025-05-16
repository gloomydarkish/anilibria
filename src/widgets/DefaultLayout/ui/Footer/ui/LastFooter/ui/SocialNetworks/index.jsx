import React from 'react';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss';
import { LAST__FOOTERS_ITEMS } from '@/widgets/DefaultLayout/model/index.js';

const SocialNetworks = () => {
    return (
        <ul className={stl.social}>
            {LAST__FOOTERS_ITEMS?.map(({ icon, to }, idx) => (
                <li key={idx}>
                    <NavLink key={to} className={stl.social__item} to={to}>
                        {icon}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default SocialNetworks;
