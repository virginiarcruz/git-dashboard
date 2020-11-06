// @ts-nocheck
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

import Card from '../components/Card';
import Form from '../components/Form';

import { Container, SectionColumns } from './styled';

const PageContainer: React.FC = () => {
  const { configValue, setConfigValue, repo } = useContext(AppContext);

  console.log('repo pageContainer', repo);
  console.log('configValue pageContainer', configValue);
  const { loading, data } = configValue;

  // useEffect(() => {
  //   setConfigValue(configValue);
  // }, [configValue]);

  console.log('loading pageContainer', loading);
  console.log('repo pageContainer', repo);
  console.log('data pageContainer', data?.repository);

  return (
    <Container>
      <div>
        <Form />
        {/* {!loading ? (
          <SectionColumns>
            {data?.repository.pullRequests.edges.map((item: CardProps) => {
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
        ) : (
          <p> Loading...</p>
        )} */}
      </div>
    </Container>
  );
};

export default PageContainer;
