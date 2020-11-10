// @ts-nocheck
import React, { useContext } from 'react';

import { Container } from './styled';
import AppContext from '../../context/AppContext';
import PageContainer from '../../containers';

import Header from '../../components/Header';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { loading, data } = context;

  return (
    <Container>
      <Header />
      {loading ? 'Loading...' : <PageContainer repository={data?.repository} />}
    </Container>
  );
};

export default Home;
