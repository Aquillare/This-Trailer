import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {setFavorite, deleteFavorite} from '../actions';
import '../assets/styles/components/CarrouselItem.scss';
import PlayIcon from "../assets/static/play-icon.png";
import PlusIcon from "../assets/static/plus-icon.png";
import ViewIcon from "../assets/static/eye.png";
import PropTypes from 'prop-types';
import removeIcon from '../assets/static/remove-icon.png';
import { Link } from 'react-router-dom';
import useGetMovies from '../hooks/useGetMovies';
import {useState} from 'react';
import { addKeyVideo } from '../actions';
import { getMovieInfo } from '../actions';
import API from '../API/Api.js';


const CarrouselItem = (props) => {

    const {id , poster_path, title, release_date, overview, isList} = props;

    const {imgUrl, mainUrl, apiKey} = API;
    

    const urlVideo= `${mainUrl}${id}/videos?${apiKey}`;
    


    const handlePlay =  async () => {
        const response = await fetch(urlVideo);
        response.json().then( responseJson => props.addKeyVideo(responseJson.results));
        
    }


    const handleMovieInfo =  () => {
        props.getMovieInfo({
            id, poster_path, title, release_date, overview
        })
        handlePlay()
    }
    

    const handleSetFavorite = () =>{

        props.setFavorite({
            id, poster_path, title, release_date, overview
        });
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
    };

    return(
        <div className="carrousel-item">
            <img className="carrousel-item__img" src={ `${imgUrl}${poster_path}`} alt="cover"/>
            <div className="carrousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img className="details_play" onClick={handlePlay} src={PlayIcon} alt="play"/>
                    </Link>

                     <Link to={`/movie`}>
                         <span className="details_info" data-descr="See more info">
                             <img  onClick={handleMovieInfo} src={ViewIcon} alt="view"/>
                         </span>
                         
                    </Link>   
                   

                    {isList ?                                //es esta validacion usamos la propiedad isList con un operador ternario para establecer que si isList es true entonces mostremos la imagen de remove, sino entonces mostramos la imagen de plus. para poder usar isList lo añdimos en la parte superior en las propiedades.
                    <span className="details_remove" data-descr="Remove from favorites">
                        <img  
                        src={removeIcon} 
                        alt="remove" 
                        onClick={() => handleDeleteFavorite(id)}
                        />
                    </span>
                     
                            :
                    <span className="details_add" data-descr="add to favorites">
                         <img 
                        src={PlusIcon}
                        alt="plus"
                        onClick={handleSetFavorite}
                        /> 
                    </span>        
                    
                     }
                    
                </div>
                <p className="carrousel-item__details--title">{title}</p>
                <p className="carrousel-item__details--subtitle">{`${release_date}`}</p>  
            </div>                   
        </div>
        );

}

CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    contentRating: PropTypes.string,
    videoKey: PropTypes.array,
    movieInfo: PropTypes.array,
};


const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
    addKeyVideo,
    getMovieInfo
}

export default connect(null, mapDispatchToProps)(CarrouselItem);