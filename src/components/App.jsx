import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import User from '../pages/User/User'
import RegistrationVacancies from '../pages/RegistrationVacancies/RegistrationVacancies'
import Error404 from '../pages/Error404/Error404'
import Layout from '../components/Layout/Layout'
import Vacant from '../pages/Vacant/Vacant';

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

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
                      <Route exact path="/vacant" component={Vacant} />
                      <Route exact path="/user" component={User}/>
                      <Route exact path="/registration-vacancies" component={RegistrationVacancies}/>
                      <Route component={Error404} />
                  </Switch>
              </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : <h1>Cargando...</h1>}
    </>
  )
};

export default App;
