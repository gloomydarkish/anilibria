import React from 'react';
import { NAV_ITEMS } from '../../model';
import { NavLink } from 'react-router-dom';

import stl from './index.module.scss'

const DefaultLayoutHeader = () => {
  return (
    <nav className={stl.nav}>
      <ul className={stl.nav__wrapper}>
        {
          NAV_ITEMS?.map((item, idx) => (
            <li key={idx}>
              <NavLink className={stl.nav__link} to={item.to}>
                {item.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default DefaultLayoutHeader;
