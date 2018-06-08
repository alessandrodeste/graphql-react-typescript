import * as React from 'react';
import './App.css';
import Users from './components/users';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Graphql</h1>
        </header>
        <div className="App-intro">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
