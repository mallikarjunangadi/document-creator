import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import MainRoute from './components/Routes.jsx';
//import {BrowserRouter, Link} from 'react-router-dom';

/*
const NavBar = () => (
  <div>
    <Link activeClassName='active' to="/">OrgForm</Link>
    <Link activeClassName='active' to="/user">UserForm</Link>
  </div>
)

const App = () => (
  <div>
    <NavBar />
    <MainRoute />
  </div>
)


ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
) , document.getElementById('root'));
//registerServiceWorker();
*/

ReactDOM.render(<App /> , document.getElementById('root'));