import { gql } from '@apollo/client';

const GET_USERDATA = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      pullRequests(last: 100, states: OPEN) {
        totalCount
        edges {
          node {
            title
            url
            mergeable
            number
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
            milestone {
              state
              dueOn
              progressPercentage
            }
          }
        }
      }
    }
  }
`;

export default GET_USERDATA;
