import React from "react";
import { connect } from 'react-redux';
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/Carrouseltem";
import "../assets/styles/Home.scss";
import Header from "../components/Header";
import ResultSearch from "../components/ResultSearch";



const Home = ( {myList, trends, originals, search} ) => {


    const url = "https://api.simkl.com/movies/tt1201607?fc33014e0fefd62f0fb92cbdcac8f9a4179ccb231a4956744658d3e992f9830f";

    fetch(url)
.then(response => {
    const data = response.json()
})
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});

        return(
            <>
                <Header/>
                <Search />

                {search ? <ResultSearch>

                </ResultSearch>
                :
                null
                }

                {myList.length > 0 &&
                <Categories tittle="Mi Lista">
                    <Carrousel>

                      {myList.map( item =>
                            <CarrouselItem
                              key={item.id}
                              {...item}
                              isList //esto es una validacion, nos servira para luego en carrouselItem.jsx establecer una codicion.
                            />
                        )}
                      
                    </Carrousel>
                </Categories>}   
                
                <Categories tittle="Tendencias">
                    <Carrousel>

                        
                        {trends.map( item =>
                            <CarrouselItem  key={item.id} {...item}/>
                        )}
                     
                    </Carrousel>
                </Categories>

                <Categories tittle="Originales de Platzi Video">
                    <Carrousel>


                        {originals.map( item =>
                            <CarrouselItem key={item.id} {...item}/>
                        )}
                        


                    </Carrousel>
                </Categories>
            </>    
        );
};

const mapStateToProps = state => {
    return{
        myList : state.myList,
        trends: state.trends,
        originals: state.originals,
        search: state.search,
    };
};

export default connect(mapStateToProps, null)(Home);