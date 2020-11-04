// @ts-nocheck
import React, { useState, useRef, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

import Button from '../Button';
import Input from '../Input';

import { FormContainer } from './styled';

const Form: React.FC = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const context = useContext(AppContext);
  const { data } = context;
  const [newRepo, setNewRepo] = useState('');

  const handleFormInput = (event): void => {
    event.preventDefault();
    const repo = formRef.current[0].value;
    sessionStorage.setItem('@githubRepo', repo);
  };

  useEffect(() => {
    console.log('sessiostorage', sessionStorage.getItem('@githubRepo'));
  }, [handleFormInput]);

  console.log('context', context);

  return (
    <FormContainer ref={formRef} onSubmit={handleFormInput}>
      <Input type="text" placeholder="http://..." />
      <Button type="submit"> Check my repo</Button>
    </FormContainer>
  );
};

export default Form;
