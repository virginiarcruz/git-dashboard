import React, { useRef, InputHTMLAttributes, useState } from 'react';

import { InputContainer } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  defaultValue,
  type,
  children,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <InputContainer
        type={type}
        value={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {children}
    </>
  );
};

export default Input;
