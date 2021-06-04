import React from 'react';
import parseRoute from './lib/parse-route';
import Home from './pages/home';
import TransactionEntry from './pages/transaction-entry';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const locationChanges = parseRoute(window.location.hash);

      this.setState({
        route: locationChanges
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'add-transaction') {
      return <TransactionEntry />;
    }
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
