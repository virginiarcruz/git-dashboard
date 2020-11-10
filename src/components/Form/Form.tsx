// @ts-nocheck
import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import AppContext from '../../context/AppContext';
import { GET_DATA } from '../../graphql';

import Button from '../Button';
import Input from '../Input';

import { FormContainer } from './styled';

const Form: React.FC = ({ onSubmit, formRef }) => {
  return (
    <>
      <FormContainer ref={formRef} onSubmit={onSubmit}>
        <Input type="text" placeholder="http://..." />
        <Button type="submit"> Check my repo</Button>
      </FormContainer>
    </>
  );
};

export default Form;
