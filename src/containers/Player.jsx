import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = props => {

    const {id} = props.match.params;

    console.log(props);
    console.log(id);

    const hasPlaying =  Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id);
    }, []);   //el array vacio que enviamos como segundo parametro es para no crear un bucle infinito.

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"></source>
            </video>
            <div className="Player-back">
     
                    <button type="button" onClick={() => props.history.goBack()}>
                        Regresar
                    </button>
             
            </div>
        </div>
    ) 
    :
    <NotFound/>;
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps= {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);


//props.history.goBack, podemos usarla porque pertenece a los meotodos de props que podemos usar gracias a que nuestro componentes estan dentro de borwserrouter.