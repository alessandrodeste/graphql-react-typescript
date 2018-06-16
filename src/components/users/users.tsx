import * as React from "react";
import { ChildProps, graphql } from 'react-apollo';
import {GetAuthorsQuery, GetAuthorsQueryVariables} from '../../__generated__/types';
import {GetAuthors} from './queries';

interface IPublicProps {
  token: string;
}

type Props = ChildProps<IPublicProps, GetAuthorsQuery>;

class Authors extends React.Component<Props, any> {
  public static defaultProps: Partial<Props> = {
      data: undefined,
  };

  constructor(props: Props){
    super(props);
  }

  public render(): JSX.Element {
    if (!this.props ||
        !this.props.data ||
        !this.props.data.authors) { 
      return <div>No users</div>;
    }

    const {list} = this.props.data.authors;
    return (
      <div>
        {list && list.map((author: any) => (
          <div>{author.name}</div>
        ))}
      </div>
    );
  }
}

const queryVars = (props: IPublicProps): GetAuthorsQueryVariables => ({
  token: props.token
});

const withGraphql = graphql<IPublicProps, GetAuthorsQuery>(GetAuthors, {
    options: (props) => ({
      variables: queryVars(props)
    })
  });

export default withGraphql(Authors);
