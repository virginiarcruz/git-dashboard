// @ts-nocheck
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const cache = new InMemoryCache({});

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});
const token = process.env.REACT_APP_GIT_TOKEN;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
