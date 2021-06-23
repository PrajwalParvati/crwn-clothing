
import './App.css';
import HomePage from './component/pages/homepage/homepage.component'; 
import ShopPage from './component/shop/shop.component';
import {Switch, Route } from 'react-router-dom';
import Header from './component/header/header.component';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
