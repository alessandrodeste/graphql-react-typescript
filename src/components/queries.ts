import gql from 'graphql-tag';

export const GetAuthors = gql`
    query GetAuthors {
        authors {
            name,
            books {
                title
            }
        }
    }
`;