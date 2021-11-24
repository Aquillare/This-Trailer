import React from 'react';
import {connect} from 'react-redux';
import {setFavorite, deleteFavorite} from '../actions';
import '../assets/styles/components/CarrouselItem.scss';
import PlayIcon from "../assets/static/play-icon.png";
import PlusIcon from "../assets/static/plus-icon.png";
import PropTypes from 'prop-types';
import removeIcon from '../assets/static/remove-icon.png';
import { Link } from 'react-router-dom';



const CarrouselItem = (props) => {

    const {id , cover, title, year, duration, contentRating, isList} = props;

    const handleSetFavorite = () =>{

        props.setFavorite({
            id, cover, title, year, duration, contentRating,
        });
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
    };

    return(
        <div className="carrousel-item">
            <img className="carrousel-item__img" src={cover} alt="cover"/>
            <div className="carrousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img src={PlayIcon} alt="play"/>
                    </Link>
                   

                    {isList ?                                  //es esta validacion usamos la propiedad isList con un operador ternario para establecer que si isList es true entonces mostremos la imagen de remove, sino entonces mostramos la imagen de plus. para poder usar isList lo añdimos en la parte superior en las propiedades.
                     <img src={removeIcon} alt="remove" onClick={() => handleDeleteFavorite(id)}/>
                            :
                     <img src={PlusIcon} alt="plus" onClick={handleSetFavorite}/> 
                     }
                    
                </div>
                <p className="carrousel-item__details--title">{title}</p>
                <p className="carrousel-item__details--subtitle">{`${year} ${contentRating} ${duration}minutos`}</p>  
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
};


const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarrouselItem);