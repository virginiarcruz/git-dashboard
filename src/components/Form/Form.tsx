// @ts-nocheck
import React from 'react';

import Button from '../Button';
import Input from '../Input';

import { FormContainer } from './styled';

const Form: React.FC = ({ onSubmit, formRef }) => {
  return (
    <>
      <FormContainer ref={formRef} onSubmit={onSubmit}>
        <Input type="text" required placeholder="owner/reponame" />
        <Button type="submit"> Check my repo </Button>
      </FormContainer>
    </>
  );
};

export default Form;
