// @ts-nocheck
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});
const token = process.env.REACT_APP_GIT_TOKEN;

const authLink = setContext((_, { headers }) => {
  const context = {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
  return context;
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
