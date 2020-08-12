import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/footer';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className='site'>
        
        <header className='header'>
          <Header />
        </header>

        <main className='site_main'>
          <Switch>

            <Route
              exact
              path={'/'}
              component={HomePage}
            />

          </Switch>
        </main>

        <footer className='footer'>
          <Footer />
        </footer>

      </div>
    )
  }
}

export default App;