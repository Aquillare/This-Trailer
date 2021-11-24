import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';

const App = () => ( 

    <Layout>
    <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route excat path="/player/:id" component={Player}/>
                <Route component={NotFound} />         
    </BrowserRouter>
    </Layout>


);

export default App;