import gql from 'graphql-tag';

export const GetAuthors = gql`
  query GetAuthors ($token: String!) {
    authors (token: $token) {
      list {
        name,
        books {
          title
        }
      }
    }
  }
`;
