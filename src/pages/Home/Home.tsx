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
  const { pullRequests } = data.repository;

  useEffect(() => {
    console.log('carregou');
  }, [context]);
  console.log('context fora', context);

  return (
    <Container>
      <Title> Git Dashboard - explore seus pull requests abertos </Title>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <Input type="text" placeholder="http://..." />
          <Button> Check my repo</Button>
          <p> Pull requests abertos: {pullRequests.totalCount}</p>
          <SectionColumns>
            {pullRequests.edges.map((item: CardProps) => {
              return (
                <Card>
                  <img
                    src={item.node.author.avatarUrl}
                    alt={item.node.author.login}
                  />
                  <div>
                    <p>{item.node.title}</p>
                    <p>Author: {item.node.author.login}</p>
                    <span>
                      {item.node.labels.nodes &&
                        item.node.labels.nodes.map((label) => label.name)}
                    </span>
                  </div>
                </Card>
              );
            })}
          </SectionColumns>
        </div>
      )}
    </Container>
  );
};

export default Home;
