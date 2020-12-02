// @ts-nocheck
import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { useLazyQuery } from '@apollo/client';
import useForm from '../hooks/useForm';
import useGetData from '../hooks/useGetData';
import validate from '../utils/inputValidationRules';

import AppContext from '../context/AppContext';
import { GET_DATA } from '../graphql';

import Card from '../components/Card';
import Form from '../components/Form';
import Filter from '../components/Filter';

import { Container, SectionColumns, Error } from './styled';
import SubTitle from '../components/SubTitle';
import SectionHeader from '../components/SectionHeader';

const PageContainer: React.FC = () => {
  const getFormRef = useRef<HTMLInputElement>(null);
  const getRefLabel = useRef<HTMLSelectElement>(null);
  const getRefAuthor = useRef<HTMLSelectElement>(null);
  const { configValue, repo, setRepo } = useContext(AppContext);
  const [author, setAuthor] = useState('');
  const [label, setLabel] = useState('');
  const [type, setType] = useState('');

  const regExpRepoName = /[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?/g;
  const repoName = repo?.match(regExpRepoName);

  const params = {
    owner: repoName ? repoName[0] : '',
    name: repoName ? repoName[1] : '',
  };

  const [getRepoData, { loading, data, error }] = useLazyQuery(GET_DATA, {
    variables: params,
  });

  const { values, errors, handleChange, handleSubmit } = useForm(
    getRepo,
    validate,
  );

  const { allAuthors, allLabels, getAllAuthors, getAllLabels } = useGetData(
    data,
  );

  function getRepo() {
    getRepoData();
    const newRepo = getFormRef.current[0].value;
    setRepo(newRepo);
    getFormRef.current[0].value = '';
  }

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
  }, [loading, data, error, configValue]);

  useEffect(() => {
    getAllAuthors();
    getAllLabels();
  }, [data]);

  const handleAuthor = (): void => {
    const filterAuthorValue = getRefAuthor.current.value;
    setAuthor(filterAuthorValue);
    setType('author');
    return type;
  };

  const handleLabel = (): void => {
    const filterValue = getRefLabel.current.value;
    setLabel(filterValue);
    setType('label');
    return type;
  };

  const allEntries = data?.repository?.pullRequests.edges.map((entrie) => {
    return entrie;
  });

  const filterAuthor = data?.repository?.pullRequests.edges.filter((item) => {
    return item.node.author.login.includes(author);
  });

  const filterLabel = data?.repository?.pullRequests.edges.filter((item) => {
    return item.node.labels.nodes.some(({ name }) => name?.includes(label));
  });

  function itemsFiltering(typeData) {
    switch (typeData) {
      case 'author':
        return filterAuthor;
        break;
      case 'label':
        return filterLabel;
        break;
      default:
        return allEntries;
    }
  }

  const itemsFiltered = itemsFiltering(type);

  return (
    <Container>
      <div>
        <Form
          formRef={getFormRef}
          onSubmit={handleSubmit}
          inputChange={handleChange}
          className={`${errors.repo && 'is-error'}`}
          value={values.repo || ''}
        >
          {errors.repo && <Error>{errors.repo}</Error>}
        </Form>
        {!loading ? (
          <>
            {data && (
              <SectionHeader>
                <SubTitle hasBullet secondary>
                  Number of pull requests opened
                  <span>{data?.repository?.pullRequests.totalCount}</span>
                </SubTitle>
                <div>
                  <p>Filter by: </p>
                  <Filter
                    filterRef={getRefAuthor}
                    defaultName="author"
                    options={allAuthors}
                    onChange={() => handleAuthor()}
                  />
                  <Filter
                    filterRef={getRefLabel}
                    defaultName="label"
                    options={allLabels}
                    onChange={() => handleLabel()}
                  />
                </div>
              </SectionHeader>
            )}
            <SectionColumns>
              {error && <p> Has an error {error.errors}</p>}
              {itemsFiltered &&
                itemsFiltered.map((item: CardProps) => {
                  return (
                    <>
                      <Card
                        key={item.node.title}
                        srcImage={item.node.author.avatarUrl}
                        author={item.node.author.login}
                        title={item.node.title}
                        date="20-03-2020"
                        totalRequests={item.node.reviewRequests.totalCount}
                        prNumber={item.node.number}
                        labels={
                          item.node.labels.nodes &&
                          item.node.labels.nodes.map((labelItem) => (
                            <span key={labelItem.name}>{labelItem.name}</span>
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
