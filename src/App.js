import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

//HOC
import WithAdminAuth from "./hoc/WithAdminAuth";
import WithAuthHoc from "./hoc/withAuthhoc";

//Redux Actions
import { checkUserSession } from "./redux/User/user.actions";

//Layouts
import MainLayout from "./layouts/mainlayouts/mainlayout-component";
import HomepageLayout from "./layouts/homepagelayouts/homepage-layout-component";

//Pages
import Registrationabc from "./components/pages/Registration/registration-component";
import Login from "./components/pages/Login/login-component";
import Recovery from "./components/pages/Recovery/recovery-compoent";
import Dashboard from "./components/pages/Dashboard/dashboard.component";
import DashBoardLayout from "./layouts/DashboardLayout/dashboardLayout.comp";
import AdminLayout from "./layouts/adminlayout/AdminLayout.component";
import Homepage from "./components/pages/Homepage/page-compoent";
import Adminpage from "./components/pages/Admin/admin.component";
import Search from "./components/pages/Search/search.comp";
//Admin Tool Bar
import AdminToolbar from "./components/AdminToolbar/admintool.component";
//Scss
import "./default.scss";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        {/* 
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <MainLayout>
              <Cart />
            </MainLayout>
          )}
        />
        <Route
          path="/payment"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Payment />
              </MainLayout>
            </WithAuth>
          )}
        /> */}
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registrationabc />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuthHoc>
              <DashBoardLayout>
                <Dashboard />
              </DashBoardLayout>
            </WithAuthHoc>
          )}
        />
        {/* <Route
          path="/order/:orderID"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Order />
              </DashboardLayout>
            </WithAuth>
          )}
        /> */}
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Adminpage />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
