import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => ( 

    <Layout>
    <BrowserRouter>
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/player/:id" component={Player}/>
                <Route path="*" component={NotFound}/>
            </Switch>             
    </BrowserRouter>
    </Layout>


);

export default App;