import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {

    const {id} = props.match.params;
    const {videoKey} = props

    const key = [...videoKey];

    const keys = key.map(element => Object.values(element));

    const keyPrueba = keys[0];

    const hasPlaying =  Object.keys(props.playing).length > 0;

 

   

    useEffect(() => {
        props.getVideoSource(id);
    }, []);   //el array vacio que enviamos como segundo parametro es para no crear un bucle infinito.

    return hasPlaying && keyPrueba ? (
        <div className="Player">
    
          
              <iframe 
                width="100%" 
                height="600vh"
                src={`https://www.youtube.com/embed/${keyPrueba[3]}`}
                title={`${"hola"}`}
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" >
             </iframe>

            

        
            <div className="Player-back">
     
                    <button type="button" onClick={() => props.history.goBack()}>
                          Back  
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
        videoKey: state.videoKey
    }
}

const mapDispatchToProps= {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);


//props.history.goBack, podemos usarla porque pertenece a los meotodos de props que podemos usar gracias a que nuestro componentes estan dentro de borwserrouter.