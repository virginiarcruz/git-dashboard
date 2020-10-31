// @ts-nocheck
import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Card from '../../components/Card';

import { Container, SectionColumns } from './styled';
import Button from '../../components/Button';
import AppContext from '../../context/AppContext';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { loading, data } = context;
  console.log('data context', !data);
  console.log('loading context', loading);

  return (
    <Container>
      <Title> Git Dashboard - explore seus pull requests abertos </Title>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <Input type="text" placeholder="http://..." />
          <Button> Check my repo</Button>
          <p>
            {' '}
            Pull requests abertos: {data.repository.pullRequests.totalCount}
          </p>
          <SectionColumns>
            {data.repository.pullRequests.edges.map((item: CardProps) => {
              return (
                <Card
                  srcImage={item.node.author.avatarUrl}
                  author={item.node.author.login}
                  title={item.node.title}
                  date="20-03-2020"
                  totalRequests={item.node.reviewRequests.totalCount}
                  labels={
                    item.node.labels.nodes &&
                    item.node.labels.nodes.map((label) => (
                      <span>{label.name}</span>
                    ))
                  }
                />
              );
            })}
          </SectionColumns>
        </div>
      )}
    </Container>
  );
};

export default Home;
