import React, { Component, useEffect, useState } from 'react';
import Homepage from './components/pages/Homepage/page-compoent';
import './default.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './layouts/mainlayouts/mainlayout-component';
import HomepageLayout from './layouts/homepagelayouts/homepage-layout-component';
import Registrationabc from './components/pages/Registration/registration-component';
import Login from './components/pages/Login/login-component';
import { auth, handleUserProfile } from './firebase/_util';
import Recovery from './components/pages/Recovery/recovery-compoent'

// const initialState = {
//   currentUser: null
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...initialState
//     }
//   }

//   authListener = null;

//   componentDidMount() {
//     this.authListener = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await handleUserProfile(userAuth);
//         userRef.onSnapshot(snapshot =>{
//           this.setState({
//             currentUser: {
//               id: snapshot.id,
//               ...snapshot.data()
//             }
//           })
//         })
//       };

//       this.setState({
//         ...initialState
//       })
//     })
//   }

//   componentWillUnmount() {
//     this.authListener();
//   }
//   render() {
//     const { currentUser } = this.state;
//     return (
//       <div className="App" data-test="appComponent">
//         <Switch>
//           <Route exact path="/" render={() => <HomepageLayout currentUser={currentUser}>
//             <Homepage />
//           </HomepageLayout>} />
//           <Route path="/registration" render={() => <MainLayout currentUser={currentUser}>
//             <Registrationabc />
//           </MainLayout>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <MainLayout currentUser={currentUser}>
//             <Login />
//           </MainLayout>} />
//         </Switch>
//       </div>
//     );
//   }
// }


let initialState = {
  currentUser: null
}
let authListener = null;
const App = () => {
  const [currentauth, setcurrentAuth] = useState(initialState);
  useEffect(() => {
    console.log('Use Effect');
    authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setcurrentAuth({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      };
      setcurrentAuth({...initialState});
    })

    return() =>{
      console.log("Null");
      authListener();
    }
  }, [])
  return (
    <div className="App" data-test="appComponent">
      <Switch>
        <Route exact path="/" render={() => <HomepageLayout currentUser={currentauth.currentUser}>
          <Homepage />
        </HomepageLayout>} />
        <Route path="/registration" render={() => currentauth.currentUser ? <Redirect to="/" /> :<MainLayout currentUser={currentauth.currentUser}>
          <Registrationabc />
        </MainLayout>} />
        <Route path="/login" render={() => currentauth.currentUser ? <Redirect to="/" /> : <MainLayout currentUser={currentauth.currentUser}>
          <Login />
        </MainLayout>} />
        <Route path="/recovery" render={() => <MainLayout>
         <Recovery />
        </MainLayout>} />
      </Switch>
    </div>
  );
}

export default App;
