import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from "graphql-tag";
import * as React from "react";

interface IState {
  authors: any[],
}

class Authors extends React.Component<any, IState> {
  constructor(props: any){
    super(props);
    this.state = { authors: [] };
    this.loadUsers();
  }

  public render() {
    window.console.log(this.state)
    return (
      <div>
        {this.state.authors && this.state.authors.map(author => (
          <div>{author.name}</div>
        ))}
      </div>
    );
  }

  private loadUsers = () => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: "http://localhost:3001/graphql"
      })
    });
  
    client.query({
      query: gql`
        {
          authors {
            name
          }
        }
      `,
    })
    .then(data => this.setState({ authors: (data.data as any).authors })) // ???
    .catch(error => window.console.error(error));
  }
}

export default Authors;
