// @ts-nocheck
import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import AppContext from '../../context/AppContext';

import Button from '../Button';
import Input from '../Input';

import { FormContainer } from './styled';

const Form: React.FC = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const { repo, setRepo } = useContext(AppContext);

  const handleFormInput = useCallback((event): void => {
    event.preventDefault();
    const newRepo = formRef.current[0].value;
    setRepo(newRepo);
    formRef.current[0].value = '';
  }, []);

  return (
    <FormContainer ref={formRef} onSubmit={handleFormInput ?? ''}>
      <Input type="text" placeholder="http://..." />
      <Button type="submit"> Check my repo</Button>
    </FormContainer>
  );
};

export default Form;
