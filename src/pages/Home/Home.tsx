// @ts-nocheck
import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_DATA } from '../../graphql';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Card from '../../components/Card';

import { Container } from './styled';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  const totalPullRequests = data.repository.pullRequests.totalCount;
  const dataPullRequests = data.repository.pullRequests.edges;

  console.log('data', data.repository.pullRequests);

  return (
    <Container>
      <Title> Git Dashboard </Title>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <Input type="text" placeholder="http://..." />
          <Button> Check my repo</Button>
          <p> Pull requests abertos: {totalPullRequests}</p>
          <section>
            {dataPullRequests.map((item: CardProps) => {
              return <Card>{item.node.title}</Card>;
            })}
          </section>
        </div>
      )}
    </Container>
  );
};

export default Home;
