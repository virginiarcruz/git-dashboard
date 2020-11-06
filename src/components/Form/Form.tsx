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

const Form: React.FC = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const { repo, setRepo, configValue } = useContext(AppContext);

  const regExpRepoName = /[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?/g;
  const repoName = repo?.match(regExpRepoName);

  const params = {
    owner: repoName ? repoName[0] : '',
    name: repoName ? repoName[1] : '',
  };

  const [getRepoData, { loading, data }] = useLazyQuery(GET_DATA, {
    variables: params,
  });

  const handleFormInput = (event): void => {
    event.preventDefault();
    getRepoData();
    const newRepo = formRef.current[0].value;
    setRepo(newRepo);
    formRef.current[0].value = '';
  };

  if (data) {
    configValue.data = data;
    configValue.loading = loading;
  }
  return (
    <>
      <FormContainer ref={formRef} onSubmit={handleFormInput}>
        <Input type="text" placeholder="http://..." />
        <Button type="submit"> Check my repo</Button>
      </FormContainer>
      <p>Insert the owner/repo in search field, to list pull requests </p>
    </>
  );
};

export default Form;
