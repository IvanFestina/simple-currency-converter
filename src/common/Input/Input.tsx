import React, { ChangeEvent } from 'react';

import s from './Input.module.scss';

type InputPropsType = {
  placeholder?: string;
  label?: string;
  type?: string;
  onChange: (value: string) => void;
  value: string;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  onKeyPress,
  ...props
}: InputPropsType) => {
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <div className={s.inputContainer}>
      <label htmlFor="input">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={inputOnChange}
        onKeyPress={e => onKeyPress(e)}
      />
    </div>
  );
};

export default Input;
