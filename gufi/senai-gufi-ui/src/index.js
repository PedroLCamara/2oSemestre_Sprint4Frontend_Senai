import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import './index.css';
import Home from './pages/Home/App.js';
import TiposEventos from './pages/TiposEventos/TiposEventos.js';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound/NotFound.js'


const Routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/TiposEventos" component={TiposEventos}></Route>
        <Route path="/NotFound" component={NotFound}></Route>
        <Redirect to="/NotFound"></Redirect>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  Routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
