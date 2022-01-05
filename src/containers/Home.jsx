import React, { useEffect, useLayoutEffect } from "react";
import { connect } from 'react-redux';
import { addVideosStateTrends, addVideosStateOriginals } from "../actions";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/Carrouseltem";
import "../assets/styles/Home.scss";
import Header from "../components/Header";
import ResultSearch from "../components/ResultSearch";
import useGetMovies from "../hooks/useGetMovies";
import { nextPageTrends } from "../actions";
import { nextPageOriginals } from "../actions";
import ButtonNext from '../components/ButtonNext';
import ButtonPrevious from "../components/ButtonPrevious";
import ContainersButtonsChangePage from "../components/ContainerButtonsChangePage";
import API from '../API/Api.js';

//para obtener el video de youtube, usar https://www.youtube.com/watch?v= seguido del key del video.



const Home = ( props ) => {


    const {numberPageTrends, numberPageOriginals, lenguageUS} = props;

    const {mainUrl, apiKey, categories, page, lenguage} = API;


    let routeTrends = `${mainUrl}${categories[0]}${page}${numberPageTrends}&${lenguageUS ? lenguage[0] : lenguage[1] }&${apiKey}`;
    let routeOriginals = `${mainUrl}${categories[1]}${page}${numberPageOriginals}&${apiKey}`;
    
    // let API = `https://api.themoviedb.org/3/movie/popular?page=${numberPageTrends}&api_key=06b042254658e847272c1a8bf7fe0fb5`;

    
    //variable que almacena un array de objetos de las peliculas traidas
     //mediante la peticion al API.

    let pageTrends= useGetMovies(routeTrends,numberPageTrends) ;
    let pageOriginals = useGetMovies(routeOriginals,numberPageOriginals);

    //Con useEffect cuando numberPgeTrends cambie, 
      //agregamos a la propiedad trends del store de 
      //la aplicacion, las peliculas almacenadas en la
      //variable trendss.

    useEffect( () =>{
        props.addVideosStateTrends(pageTrends),
    [numberPageTrends]});

    useEffect( () =>{
        props.addVideosStateOriginals(pageOriginals),
    [numberPageOriginals]});
  

        return(
            <>
                <Header/>
                <Search />

                {props.search ? <ResultSearch>

                </ResultSearch>
                :
                null
                }

                {props.myList.length > 0 &&
                <Categories tittle="My List">
                    
                    <Carrousel>
                       
                      {props.myList.map( item =>
                            <CarrouselItem
                              key={item.id}
                              {...item}
                              isList //esto es una validacion, nos servira para luego en carrouselItem.jsx establecer una codicion.
                            />
                        )}
                      
                    </Carrousel>
                </Categories>}   
                
                <Categories tittle="Trends">

                  
                        <ContainersButtonsChangePage>
                            <ButtonPrevious nameButton="Previous" categoryButton="Trends" page={numberPageTrends}/>
                            <ButtonNext nameButton="Next" categoryButton="Trends" page={numberPageTrends}/>
                        </ContainersButtonsChangePage>
           
                    <Carrousel>
                    
                        
                        { 
                            pageTrends.map( item =>
                                <CarrouselItem  key={item.id} {...item}/>) 
                       
                        }
                        
                     
                    </Carrousel>
                </Categories>

                <Categories tittle="Populars">

                    <ContainersButtonsChangePage>
                        <ButtonPrevious nameButton="Previous" categoryButton="Originals" page={numberPageOriginals}/>
                        <ButtonNext nameButton="Next" categoryButton="Originals" page={numberPageOriginals}/>
                    </ContainersButtonsChangePage>

                    <Carrousel>


                        {pageOriginals.map( item =>
                            <CarrouselItem key={item.id} {...item}/>
                        )}
                        


                    </Carrousel>
                </Categories>
            </>    
        );
};

const mapStateToProps = state => {
    return{
        myList: state.myList,
        trends: state.trends,
        movieInfo: state.movieInfo,
        search: state.search,
        originals: state.originals,
        numberPageTrends: state.numberPageTrends,
        numberPageOriginals: state.numberPageOriginals,
        lenguageUS: state.lenguageUS,
    };
};

const mapDispatchToProps = {
    addVideosStateTrends,
    addVideosStateOriginals,
    nextPageTrends,
    nextPageOriginals
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);