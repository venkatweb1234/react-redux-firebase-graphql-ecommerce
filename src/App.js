import React, { Component, useEffect, useState } from 'react';
import Homepage from './components/pages/Homepage/page-compoent';
import './default.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './layouts/mainlayouts/mainlayout-component';
import HomepageLayout from './layouts/homepagelayouts/homepage-layout-component';
import Registrationabc from './components/pages/Registration/registration-component';
import Login from './components/pages/Login/login-component';
import { auth, handleUserProfile } from './firebase/_util';
import Recovery from './components/pages/Recovery/recovery-compoent';
import Dashboard from './components/pages/Dashboard/dashboard.component'
import { useSelector, useDispatch} from 'react-redux';
import { setCurrentUser } from './redux/User/user.actions';
import WithAuthHoc from './hoc/withAuthhoc';

const App = props => {
 const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }))
        })
      };
      dispatch(setCurrentUser(userAuth));
    })

    return () => {
      console.log("Null");
      authListener();
    }
  }, [])
  return (

    <div className="App" data-test="appComponent">
      <Switch>
        <Route exact path="/" render={() => <HomepageLayout>
          <Homepage />
        </HomepageLayout>} />
        <Route path="/registration" render={() => <MainLayout>
          <Registrationabc />
        </MainLayout>} />
        <Route path="/login" render={() =>  <MainLayout>
          <Login />
        </MainLayout>} />
        <Route path="/recovery" render={() => <MainLayout>
          <Recovery />
        </MainLayout>} />
        <Route path="/dashboard" render={() =>
          <WithAuthHoc>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuthHoc>} />
      </Switch>
    </div>
  );
}



export default App;
