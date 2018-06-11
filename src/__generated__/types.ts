/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface GetAuthorsQuery {
  authors:  Array< {
    __typename: "Author",
    name: string | null,
    books:  Array< {
      __typename: "Book",
      title: string,
    } | null > | null,
  } | null > | null,
};
