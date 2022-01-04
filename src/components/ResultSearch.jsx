import React,{useEffect} from "react";
import { connect } from "react-redux";
import { resultSearch } from "../actions";
import '../assets/styles/components/Searching.scss';
import {setFavorite, deleteFavorite, searchVideo} from '../actions';
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/Carrouseltem";



const ResultSearch = props => {
    

    useEffect( () => {

    }, [props.search])
    



    return(
         <>
            {props.search.length > 0 ? 
                  
                    <Carrousel>
            
                        {props.search.map( item => item.poster_path != null ?
                            <CarrouselItem  key={item.id} {...item}/> 
                            :
                            null 
                          )
                          
                        }
        
                    </Carrousel>
               : 
               null 
            }  
        </>           
    )
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





{/* <div id="contenedor">
            {Object.values(props.search).length != 0 ?
            

                props.search.map(item => 
                    <div id="caja" className="div-resultado">
                        <div id="resultado" className="resultado">
                            <h2 className="resultado-p">Ultima Busqueda<button id="buttoEquis" onClick={equisButton} className ="button-equis"type="button">x</button></h2>
                            <div className="carrousel-item">
                                <img className="carrousel-item__img" src={`${item.poster_path}`} alt="cover"/>
                                <div className="carrousel-item__details">
                                    <div>
                                        <Link to={`/player/${item.id}`}>
                                            <img src={PlayIcon} alt="play"/>
                                        </Link>
                                        
                    
                                        {isList ?                                  //es esta validacion usamos la propiedad isList con un operador ternario para establecer que si isList es true entonces mostremos la imagen de remove, sino entonces mostramos la imagen de plus. para poder usar isList lo añdimos en la parte superior en las propiedades.
                                        <img src={removeIcon} alt="remove" onClick={() => handleDeleteFavorite(item.id)}/>
                                                :
                                        <img src={PlusIcon} alt="plus" onClick={handleSetFavorite}/> 
                                        }
                                        
                                    </div>
                                    <p className="carrousel-item__details--title">{item.original_title}</p>
                                    <p className="carrousel-item__details--subtitle">{`${item.release_date}`}</p>  
                                </div>
                            </div>
                        </div>
                    </div>                           
            )

            : 

            null

            }
        </div> */}