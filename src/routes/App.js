import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../containers/Player';
import MovieInfo from '../components/MovieInfo';
import useInitialState from '../hooks/useInitialState';
import { Provider } from 'react-redux';
import {createStore, compose} from "redux";
import reducer from "../reducers";


const App = () => {

    //ruta API para bsuquedas //query es el string a buscar.
    let query;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=06b042254658e847272c1a8bf7fe0fb5&language=en-US&query=${query}&page=1&include_adult=false`

    const initialState = {
        user: {},
        "playing": {},
        numberPageTrends:1,
        numberPageOriginals:1,
        "movieInfo":[],
        "search":[],
        "myList": [],
        "trends": [],
        "originals": [],
        "videoKey":[],
        lenguageUS: true,
    }

     const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //asi conectamos el dev tols de redux a nuestra aplicacion.

    const store = createStore(reducer, initialState, composeEnhancers());


    return( 
        <Provider store={store}>
            <Layout>
                <BrowserRouter>
                        <Switch> 
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/player/:id" component={Player}/>
                            <Route exact path="/movie" component={MovieInfo}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>             
                </BrowserRouter>
            </Layout>
        </Provider>    
    )

};

export default App;