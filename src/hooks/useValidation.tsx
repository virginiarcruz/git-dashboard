// @ts-check
import { useRef } from 'react';

const useValidation = () => {
  const ref = useRef<HTMLInputElement>(null);
  const validate = () => ref?.current?.validity;
  return [ref, validate];
};

export default useValidation;
