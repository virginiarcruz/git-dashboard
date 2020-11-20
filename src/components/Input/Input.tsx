import React, { useRef, InputHTMLAttributes } from 'react';

import { InputContainer } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, type, children, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <InputContainer type={type} value={value} ref={inputRef} {...rest} />
      {children}
    </>
  );
};

export default Input;
