
import './App.css';
import HomePage from './component/pages/homepage/homepage.component'; 
import ShopPage from './component/shop/shop.component';
import {Switch, Route } from 'react-router-dom';
import { div } from 'prelude-ls';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
