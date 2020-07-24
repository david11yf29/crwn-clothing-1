import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import ShopPage from './pages/shop/shop.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // this will give back a function, invoke when need close!
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      console.log(user);
    })
  }

  componentWillMount() {
    // invoke function when need close!
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;