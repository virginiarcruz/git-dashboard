// @ts-nocheck
import React, { useContext, useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';

import AppContext from '../context/AppContext';
import { GET_DATA } from '../graphql';

import Card from '../components/Card';
import Form from '../components/Form';

import { Container, SectionColumns } from './styled';
import SubTitle from '../components/SubTitle';

const PageContainer: React.FC = () => {
  const getFormRef = useRef<HTMLInputElement>(null);
  const { configValue, setConfigValue, repo, setRepo } = useContext(AppContext);

  const regExpRepoName = /[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?/g;
  const repoName = repo?.match(regExpRepoName);

  const params = {
    owner: repoName ? repoName[0] : '',
    name: repoName ? repoName[1] : '',
  };

  const [getRepoData, { loading, data, error }] = useLazyQuery(GET_DATA, {
    variables: params,
  });

  const handleFormInput = (event): void => {
    event.preventDefault();
    getRepoData();
    const newRepo = getFormRef.current[0].value;
    setRepo(newRepo);
    getFormRef.current[0].value = '';
  };

  useEffect(() => {
    if (data) {
      console.log('data api', data);
      configValue.data = data;
      configValue.loading = loading;
    }

    if (error) {
      console.log('error', error.errors);
      configValue.error = error;
    }
  }, [loading, data, error]);

  return (
    <Container>
      <div>
        <Form formRef={getFormRef} onSubmit={handleFormInput} />
        {!loading ? (
          <>
            {data && (
              <SubTitle hasBullet secondary>
                Number of pull requests opened
                <span>{data?.repository.pullRequests.totalCount}</span>
              </SubTitle>
            )}
            <SectionColumns>
              {error && <p> Has an error {error.errors}</p>}
              {data?.repository.pullRequests.edges.map((item: CardProps) => {
                return (
                  <>
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
                  </>
                );
              })}
            </SectionColumns>
          </>
        ) : (
          <p> Loading...</p>
        )}
      </div>
    </Container>
  );
};

export default PageContainer;
