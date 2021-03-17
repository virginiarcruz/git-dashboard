// @ts-nocheck
import React from 'react';
// import useForm from '../../hooks/useForm';
// import validate from '../../utils/inputValidationRules';

import Button from '../Button';
import Input from '../Input';

import { FormContainer } from './styled';

const Form: React.FC = ({
  formRef,
  onSubmit,
  inputChange,
  className,
  value,
  children,
}) => {
  return (
    <>
      <FormContainer ref={formRef} onSubmit={onSubmit} noValidate>
        <Input
          className={className}
          type="text"
          placeholder="owner/reponame"
          onChange={inputChange}
          name="repo"
          value={value}
          autoComplete="on"
          required
        />
        <Button type="submit"> Check my repo </Button>
        {children}
      </FormContainer>
    </>
  );
};

export default Form;
