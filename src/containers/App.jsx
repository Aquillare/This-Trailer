import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/Carrouseltem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = 'http://localhost:3000/initalState'

const App = () => {

    const initialState = useInitialState(API);  


        return(
            <div className="App">
                <Header />
                <Search />

                {initialState.mylist ? initialState.mylist.length > 0 &&
                <Categories tittle="Mi Lista">
                    <Carrousel>
                        <CarrouselItem/>
                    </Carrousel>
                </Categories> : ""}   
                
                <Categories tittle="Tendencias">
                    <Carrousel>

                        
                        {initialState.trends ? initialState.trends.map( item =>
                            <CarrouselItem  key={item.id} {...item}/>
                        ): ""}
                     
                    </Carrousel>
                </Categories>

                <Categories tittle="Originales de Platzi Video">
                    <Carrousel>


                        {initialState.originals ? initialState.originals.map( item =>
                            <CarrouselItem key={item.id} {...item}/>
                        ) : ""}
                        


                    </Carrousel>
                </Categories>

                <Footer/>

            </div>
        );
}

export default App;