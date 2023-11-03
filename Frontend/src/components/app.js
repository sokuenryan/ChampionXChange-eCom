import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../style/media-queries.css';

import Home from './home/home.js';

import Register from './home/header/register.js';
import Login from './home/header/login.js';
import SignUp from './home/header/signup.js';
import Cart from './home/header/cart.js';

import Trading from './home/header/navbar/trading.js';
import Selling from './home/header/navbar/selling.js';
import Thrift from './home/header/navbar/thrift.js';
import Contact from './home/header/navbar/contact.js';
import Jerseys from './home/header/navbar/jersey.js';
import SportingGoods from './home/header/navbar/sportinggoods.js';
import Referees from './home/header/navbar/referees.js';


function App() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/cart" component={Cart} />

            <Route exact path="/trading" component={Trading} />
            <Route exact path="/selling" component={Selling} />
            <Route exact path="/thrift" component={Thrift} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/jerseys" component={Jerseys} />
            <Route exact path="/sporting-goods" component={SportingGoods} />
            <Route exact path="/referees" component={Referees} />
          </Switch>
        </div>
      </Router>
    );
  }

  export default App;

