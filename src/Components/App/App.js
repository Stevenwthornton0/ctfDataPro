import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Documents from '../Documents/Documents';
import CellPhone from '../Services/CellPhone';
import CellTower from '../Services/CellTower';
import GPS from '../Services/GPS';
import Password from '../Services/Password';
import Contact from '../Contact/Contact';
import Photos from '../Photos/Photos';
import Footer from '../Footer/footer';
import './App.css';


class App extends React.Component {

  render() {
  
    return (
      <div className='site' id='site'>
        
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

            <Route 
              path={'/services/cellphone'}
              component={CellPhone}
            />

            <Route 
              path={'/services/gps'}
              component={GPS}
            />

            <Route 
              path={'/services/celltower'}
              component={CellTower}
            />

            <Route 
              path={'/services/password'}
              component={Password}
            />

            <Route 
              path={'/documents'}
              component={Documents}
            />

            <Route 
              path={'/contact'}
              component={Contact}
            />

            <Route 
              path={'/photos'}
              component={Photos}
            />

          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    )
  }
}

export default App;