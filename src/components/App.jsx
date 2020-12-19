import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import User from '../pages/User/User'
import Error404 from '../pages/Error404/Error404'
import Layout from '../components/Layout/Layout'
import Vacant from '../pages/Vacant/Vacant';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
<<<<<<< HEAD
                <Route exact path="/vacant" component={Vacant} />
=======
                <Route exact path="/user" component={User}/>
>>>>>>> f034e537ade5b682bb5845f3b4b67f965a31f837
                <Route component={Error404} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
