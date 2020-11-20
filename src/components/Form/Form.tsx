// @ts-nocheck
import React from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../utils/inputValidationRules';

import Button from '../Button';
import Input from '../Input';

import { FormContainer, Error } from './styled';

const Form: React.FC = ({ getFormRef }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    getRepo,
    validate,
  );

  function getRepo() {
    console.log('No errors, submit callback called!');
    console.log(values);
  }

  return (
    <>
      <FormContainer ref={getFormRef} onSubmit={handleSubmit} noValidate>
        <Input
          className={`${errors.repo && 'is-error'}`}
          type="text"
          placeholder="owner/reponame"
          onChange={handleChange}
          name="repo"
          value={values.repo || ''}
          autoComplete="on"
          required
        />
        <Button type="submit"> Check my repo </Button>
        {errors.repo && <Error>{errors.repo}</Error>}
      </FormContainer>
    </>
  );
};

export default Form;
