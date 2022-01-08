import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/TrailerContainer.scss';

const TrailerContainer = (props) => {

    const {key} = props.value;

    return(
      <>
      {key ?
        <section className='trailerContainer'>     
        <iframe className='trailerContainer_video'
          src={`https://www.youtube.com/embed/${key}`}
          title={`${"hola"}`}
          allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </section> :
    
        <p>nada para mostrar</p>}
      </>
    )
    
}

const mapStateToProps = state => {
  return{
    videoKey: state.videoKey,
  }
}

export default connect(mapStateToProps,null)(TrailerContainer);