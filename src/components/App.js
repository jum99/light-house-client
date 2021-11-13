import React from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './../privateRoute/PrivateRoute';
import { AuthProvider } from './../contexts/AuthContext';
import SingleProduct from './pages/SingleProduct';
// import UserAccount from './pages/UserDashboard/UserAccount';
import RouteDiv from './pages/UserDashboard/RouteDiv';
import Explore from './pages/Explore';
import AboutUs from './sections/AboutUs';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard"><RouteDiv /></PrivateRoute>
          <Route path="/login"><Login /></Route>
          <Route path="/signUp"><SignUp /></Route>
          <PrivateRoute path="/explore"><Explore /></PrivateRoute>
          <PrivateRoute path="/purchase/:Id"><SingleProduct /></PrivateRoute>
          <Route path="/home"><Home /></Route>
          <Route path="/about"><AboutUs /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="*"><Home /></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;