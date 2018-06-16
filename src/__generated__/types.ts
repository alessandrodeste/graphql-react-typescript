/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface GetAuthorsQueryVariables {
  token: string,
};

export interface GetAuthorsQuery {
  authors:  {
    __typename: "AuthorList",
    list:  Array< {
      __typename: "Author",
      name: string,
      books:  Array< {
        __typename: "Book",
        title: string,
      } | null > | null,
    } | null >,
  },
};
