import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "./reducers";



ReactDOM.render(

    <App/>
,
 document.getElementById('app')
 );

