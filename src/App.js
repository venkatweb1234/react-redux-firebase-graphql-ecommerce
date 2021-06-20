import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//HOC
import WithAdminAuth from './hoc/WithAdminAuth';
import WithAuthHoc from './hoc/withAuthhoc';

//Redux Actions
import { checkUserSession } from './redux/User/user.actions';

//Layouts
import MainLayout from './layouts/mainlayouts/mainlayout-component';
import HomepageLayout from './layouts/homepagelayouts/homepage-layout-component';

//Pages
import Registrationabc from './components/pages/Registration/registration-component';
import Login from './components/pages/Login/login-component';
import Recovery from './components/pages/Recovery/recovery-compoent';
import Dashboard from './components/pages/Dashboard/dashboard.component';
import Admin from './components/pages/Admin/admin.component';
import Homepage from './components/pages/Homepage/page-compoent';

//Admin Tool Bar
import AdminToolbar from './components/AdminToolbar/admin.component';
//Scss
import './default.scss';



const App = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  },[])

  return (

    <div className="App" data-test="appComponent">
      <AdminToolbar/>
      <Switch>
        <Route exact path="/" render={() => <HomepageLayout>
          <Homepage />
        </HomepageLayout>} />
        <Route path="/registration" render={() => <MainLayout>
          <Registrationabc />
        </MainLayout>} />
        <Route path="/login" render={() => <MainLayout>
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
          <Route path="/admin" render={() => 
          <WithAdminAuth>
          <MainLayout>
          <Admin />
        </MainLayout>
        </WithAdminAuth>} />
      </Switch>
    </div>
  );
}



export default App;
