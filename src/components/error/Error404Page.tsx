import React from 'react';

import cat from './cat.png';
import s from './Error404.module.css';

export const Error404Page = () => {
  return (
    <div className={s.box}>
      <div>
        <div className={s.child_box1}>404</div>
        <div className={s.child_box2}>Oh! Page not found</div>
        <div className={s.child_box2}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        {/* <NavLink to={PATH.PRE_JUNIOR} className={setClassName}>Нажмите для возврата к странице */}
        {/*    Pre-junior</NavLink> */}
      </div>
      <img src={cat} alt={cat} />
    </div>
  );
};
