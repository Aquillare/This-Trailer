import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.scss';
import { searchVideo } from '../actions';
import { resultSearch } from '../actions';

const Search = props => {

    let {search} = {props}

    
    const [form, setValues] = useState({
        videoSearch:"",

    });


    const handleInput = event =>{
        let value = event.target.value;
        console.log({[event.target.name] : value})
        setValues({
            [event.target.name] : value
        });
    };

    const handleSubmit = event =>{
        if(event.key == "Enter"){
        event.preventDefault();
        props.searchVideo(form.videoSearch);
        }
    }




 


    return(
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input
            id="value"
            onChange={handleInput}
            onKeyPress={handleSubmit}
            name="videoSearch" 
            className="input" 
            type="search" 
            placeholder="Buscar.." 
        />
    </section>
    );
}

const mapStateToProps = state =>{
    return{
        search: state.search,
        trends: state.trends,
        originals: state.originals,
    }
};

const mapDispatchToProps = {
    searchVideo,
    resultSearch,
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);