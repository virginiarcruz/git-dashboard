// @ts-nocheck
import React from 'react';

import Title from '../components/Title';
import Input from '../components/Input';
import Card from '../components/Card';
import Button from '../components/Button';

import { Container, SectionColumns } from './styled';

const PageContainer: React.FC = ({ repository: { pullRequests } }) => {
  return (
    <Container>
      <Title> Git Dashboard - explore seus pull requests abertos </Title>

      <div>
        <Input type="text" placeholder="http://..." />
        <Button> Check my repo</Button>
        <p> Pull requests abertos: {pullRequests.totalCount}</p>
        <SectionColumns>
          {pullRequests.edges.map((item: CardProps) => {
            return (
              <Card
                key={item.node.title}
                srcImage={item.node.author.avatarUrl}
                author={item.node.author.login}
                title={item.node.title}
                date="20-03-2020"
                totalRequests={item.node.reviewRequests.totalCount}
                labels={
                  item.node.labels.nodes &&
                  item.node.labels.nodes.map((label) => (
                    <span key={label.id}>{label.name}</span>
                  ))
                }
              />
            );
          })}
        </SectionColumns>
      </div>
    </Container>
  );
};

export default PageContainer;
