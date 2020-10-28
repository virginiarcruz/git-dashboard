import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_DATA } from '../../graphql';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { Container } from './styled';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  return (
    <Container>
      <Title> Git Dashboard </Title>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <Input type="text" placeholder="http://..." />
          <Button> Check my repo</Button>
        </div>
      )}
    </Container>
  );
};

export default Home;
