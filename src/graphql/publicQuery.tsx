import { gql } from '@apollo/client';

const GET_USERDATA = gql`
  query {
    repository(owner: "testing-library", name: "testing-library-docs") {
      pullRequests(last: 100, states: OPEN) {
        totalCount
        edges {
          node {
            title
            url
            mergeable
            author {
              avatarUrl
              login
            }
            labels(first: 5) {
              nodes {
                name
                id
              }
            }
            assignees(first: 5) {
              totalCount
              edges {
                node {
                  login
                }
              }
            }
            reviews(first: 100) {
              totalCount
              nodes {
                id
                comments(first: 10) {
                  totalCount
                  edges {
                    node {
                      createdAt
                      bodyText
                    }
                  }
                }
              }
            }
            reviewRequests(first: 100) {
              totalCount
              nodes {
                id
                pullRequest {
                  id
                  state
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_USERDATA;
