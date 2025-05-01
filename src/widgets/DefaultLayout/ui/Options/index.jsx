import React from 'react';

import stl from './index.module.scss'
import { NavLink } from 'react-router-dom';
import { OPTIONS__ITEMS } from '../../model';

const Options = () => {
  return (
      <ul className={stl.options}>
        {OPTIONS__ITEMS?.map(({ icon, to}, idx) => (
          <li>
            <NavLink key={to} className={stl.options__item} to={to}>
              {icon}
            </NavLink>
          </li>
        ))}
      </ul>
  );
};

export default Options;

