import React from 'react';

import s from './Button.module.scss';

type ButtonPropsType = {
  text: string;
  width?: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ text, onClick, ...props }: ButtonPropsType) => {
  return (
    <button onClick={onClick} className={s.button} {...props}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
