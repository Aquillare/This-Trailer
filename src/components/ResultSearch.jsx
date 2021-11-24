import React,{useEffect} from "react";
import { connect } from "react-redux";
import { resultSearch } from "../actions";
import '../assets/styles/components/Searching.scss';
import { Link } from "react-router-dom";
import PlayIcon from "../assets/static/play-icon.png";
import PlusIcon from "../assets/static/plus-icon.png";
import PropTypes from 'prop-types';
import removeIcon from '../assets/static/remove-icon.png';
import {setFavorite, deleteFavorite, searchVideo} from '../actions';



const ResultSearch = props => {
    
    const {id , cover, title, year, duration, contentRating, isList} = props.search;

    const handleSetFavorite = () =>{

        props.setFavorite({
            id, cover, title, year, duration, contentRating,
        });
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
    };
    
    console.log(props);

    let cancion = props.search;
    console.log(cancion);

    const equisButton = () =>{   //con equisButton usamos el action searchVideo, para enviar un array vacio a la propiedad search del estado incial, asi myList no contendra valores, porlo que no se mostrara ningun elemento.

            props.searchVideo("");
        
    };
    console.log(props.search.length)

    // useEffect(()=> {
    //     let caja = document.getElementById("caja")
    //     if(props.search.title != undefined && caja.childNodes.length < 1){
    //         let cover = document.createElement('img');
    //         cover.src = `${props.search.cover}`;
    //         cover.className = "cover"
    //         caja.appendChild(cover);
    //         setTimeout(()=> {caja.removeChild(cover)},2000)

    //     }
        
        
    // }, );

    return(
        <div id="contenedor">
        {Object.values(props.search).length != 0 ?
        <div id="caja" className="div-resultado">
           { Object.values(props.search).length != 0 ? 
           <div id="resultado" className="resultado">
               <h2 className="resultado-p">Ultima Busqueda<button id="buttoEquis" onClick={equisButton} className ="button-equis"type="button">x</button></h2>
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
           </div>
           :
           <p>Busqueda</p>
            }
        </div>
        :
        null
        }
        </div>
    );
}

const mapStateToProps = state => {
    return{
        search : state.search,
    }
    
}

const mapDispatchToProps = {
    resultSearch,
    deleteFavorite,
    setFavorite,
    searchVideo,
}

export default connect(mapStateToProps,mapDispatchToProps)(ResultSearch);