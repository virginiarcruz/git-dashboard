// @ts-nocheck
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import Card from '../components/Card';
import Form from '../components/Form';

import { Container, SectionColumns } from './styled';

const PageContainer: React.FC = ({ repository: { pullRequests } }) => {
  const context = useContext(AppContext);
  const { data } = context;
  console.log('data pagecontainer', data);
  return (
    <Container>
      <div>
        <Form />
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
