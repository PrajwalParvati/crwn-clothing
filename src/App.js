
import './App.css';
import HomePage from './component/pages/homepage/homepage.component'; 
import ShopPage from './component/shop/shop.component';
import {Switch, Route } from 'react-router-dom';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/sign-up-and-sign-out/sign-up-and-sign-out.component';
import {auth} from './firebase/firebase.util'
import React from 'react';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  UnsubscribeFromAuth=null

componentDidMount(){
  this.UnsubscribeFromAuth = auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
    console.log(this.state.currentUser);
  })
}

componentWillUnmount(){
  this.UnsubscribeFromAuth();
}

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
  }
}

export default App;
