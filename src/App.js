import './App.css';
import Header from './components/Header/Header';
import VolunteerActivities from './components/VolunteerActivities/VolunteerActivities';
import RegisteredActivities from './components/RegisteredActivities/RegisteredActivities';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Enventory from './components/enventory/Enventory';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInuser] = useState(false)
  
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInuser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <VolunteerActivities/>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registeredActivities">
              <RegisteredActivities></RegisteredActivities>
            </Route>
            <PrivateRoute path="/event/:id">
              <Register/>
            </PrivateRoute>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;