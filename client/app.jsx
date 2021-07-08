import React from 'react';
import NavbarDaily from './components/home/navbar/navbar-daily';
import NavbarWeekly from './components/home/navbar/navbar-weekly';
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
    if (route.path === 'daily') {
      return <NavbarDaily />;
    }
    if (route.path === 'weekly') {
      return <NavbarWeekly />;
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
