import React from 'react';
import Homepage from './components/pages/page-compoent';
import './default.scss';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayouts/mainlayout-component';
import HomepageLayout from './layouts/homepagelayouts/homepage-layout-component';
import Registrationabc from './components/pages/Registration/registration-component';

function App() {
  return (
    <div className="App" data-test="appComponent">
        <Switch>
          <Route exact path="/"  render={()=> <MainLayout>
            <Homepage />
          </MainLayout>} />
          <Route path="/registration"  render={()=> <MainLayout>
            <Registrationabc />
          </MainLayout>} />
        </Switch>
    </div>
  );
}

export default App;
