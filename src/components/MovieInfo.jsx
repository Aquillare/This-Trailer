import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import TrailerContainer from './TrailerContainer';
import Header from './Header';
import API from '../API/Api.js';
import NotFound from '../containers/NotFound';
import Grid from '@mui/material/Grid';
import '../assets/styles/components/MovieInfo.scss';


const MovieInfo = (props) => {
    const{poster_path, overview, vote_average} = props.movieInfo;
    const imgUrl= API.imgUrl;
    
    const [keyVideo, setKeyvideo] = useState([]);
    useEffect( () => {
        setKeyvideo([...props.videoKey]);
    }, [props.videoKey]);


    const [view , setView] = useState(false);

    useEffect( () => {
        
    }, [view])

    const handleViewTrailers =() => {
        setView(true);
    }

    return (
        <>
            <Header/>
            <section className='container_movieInfo' >
                <button className='button_return' type="button" onClick={() => props.history.goBack()}>
                        Back
                </button>
                { props.movieInfo.poster_path?.length > 0 ?
                <>
                    <div className='movieInfo'>
                    <img className='MovieInfo_background' src={`${imgUrl}${poster_path}`}/>
                    <aside className='MovieInfo_Info'>
                        <p className='MovieInfo_Text'>{overview}</p>
                        <p className='MovieInfo_Text'>{vote_average}</p>
                    </aside>
                    
                    </div>
                    <button onClick={() => handleViewTrailers()}className='button_verTrailers'>Watch trailers</button>    
                    <div className='MovieInfo_Trailers'>
                        <div className={!view && 'trailer' || (view && keyVideo.length > 0) && 'trailer_view'}>
                        {keyVideo.length > 0 && view == true ? keyVideo.map(element => 
                            <TrailerContainer key={element.id} value={element}/>
                        
                        )  
                        : 
                        <div className={view && 'trailerNone_on' || !view && 'trailerNone_off' }>
                            <p className='none_on'>No trailers to show</p>
                        </div>   
                        }
                        </div>
                          
                    </div>
                </>    
                    :
                    <NotFound/>
                }
                
            </section>
           
        </>
    ) 
}

const MapStateToProps = state => {
    return{
        movieInfo: state.movieInfo,
        videoKey: state.videoKey
    }
}

export default connect(MapStateToProps,null)(MovieInfo);