// @ts-nocheck
import React, { useEffect, useContext } from 'react';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Card from '../../components/Card';

import { Container } from './styled';
import AppContext from '../../context/AppContext';
import PageContainer from '../../containers';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { loading, data } = context;

  return (
    <Container>
      <Title> Git Dashboard - explore seus pull requests abertos </Title>
      {loading ? 'Loading...' : <PageContainer repository={data?.repository} />}
    </Container>
  );
};

export default Home;
