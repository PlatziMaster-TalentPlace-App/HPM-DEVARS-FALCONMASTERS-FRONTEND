import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import User from '../pages/User/User'
import RegistrationVacancies from '../pages/RegistrationVacancies/RegistrationVacancies'
import Error404 from '../pages/Error404/Error404'
import Layout from '../components/Layout/Layout'
import Vacant from '../pages/Vacant/Vacant';
import CoachManagement from '../pages/CoachManagement/CoachManagement';

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import coachManagement from '../pages/CoachManagement/CoachManagement';
import loader from './assets/loader.gif'

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.vacancies).length;

  return(
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
              <Layout>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/vacant/:id" component={Vacant} />
                      <Route exact path="/user" component={User}/>
                      <Route exact path="/registration-vacancies" component={RegistrationVacancies}/>
                      <Route exact path="/coach-management" component={coachManagement}/>
                      <Route component={Error404} />
                  </Switch>
              </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : <section style={{display:'flex', 
                    alignItems:'center', 
                    justifyContent:'center', 
                    backgroundColor: '#e5eff1',
                    width: '100%',
                    height: '100vh'}}>
                    <img src={loader} alt="loading..."/>
          </section>
    }
    </>
  )
};

export default App;
