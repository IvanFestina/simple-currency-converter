import React from 'react';

import { NavLink } from 'react-router-dom';

import paperStyle from '../../common/styles/classes.module.scss';
import { PATH } from '../RoutesApp';

import s from './Header.module.scss';

export const Header = () => {
  return (
    <div className={`${s.headerWrapper} ${paperStyle.shadowPaper}`} data-z="paper-1">
      <div className={s.tab}>
        <NavLink
          to={PATH.CURRENCY_EXCHANGE}
          className={nav => (nav.isActive ? s.active : '')}
        >
          Currency exchange
        </NavLink>
      </div>
      <div className={s.tab}>
        <NavLink
          to={PATH.CURRENCY_CHART}
          className={nav => (nav.isActive ? s.active : '')}
        >
          Currency chart
        </NavLink>
      </div>
    </div>
  );
};
