import { gql } from '@apollo/client';

const GET_USERDATA = gql`
  query StarredReposQuery($numRepos: Int) {
    viewer {
      id
      starredRepositories(last: $numRepos) {
        nodes {
          id
          name
          description
          pushedAt
          url
          languages(first: 5) {
            nodes {
              id
              color
              name
            }
          }
        }
      }
    }
  }
`;

export default GET_USERDATA;
