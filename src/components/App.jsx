import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404'
import Layout from '../components/Layout/Layout'
import Vacant from '../pages/Vacant/Vacant';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/vacant" component={Vacant} />
                <Route component={Error404} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
