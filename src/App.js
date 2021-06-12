import React, { Component } from 'react';
import Homepage from './components/pages/Homepage/page-compoent';
import './default.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './layouts/mainlayouts/mainlayout-component';
import HomepageLayout from './layouts/homepagelayouts/homepage-layout-component';
import Registrationabc from './components/pages/Registration/registration-component';
import Login from './components/pages/Login/login-component';
import { auth, handleUserProfile } from './firebase/_util';

const initialState = {
  currentUser: null
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      };

      this.setState({
        ...initialState
      })
    })
  }

  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App" data-test="appComponent">
        <Switch>
          <Route exact path="/" render={() => <HomepageLayout currentUser={currentUser}>
            <Homepage />
          </HomepageLayout>} />
          <Route path="/registration" render={() => <MainLayout currentUser={currentUser}>
            <Registrationabc />
          </MainLayout>} />
          <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <MainLayout currentUser={currentUser}>
            <Login />
          </MainLayout>} />
        </Switch>
      </div>
    );
  }
}

export default App;
