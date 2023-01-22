import React, {useState } from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import { resultSearch } from '../actions';
import API from '../API/Api.js';
import '../assets/styles/components/Search.scss';

const Search = props => {

    const {searchUrl, apiKey, lenguage} = API;

    const [form, setValues] = useState({
        videoSearch:"",
    });

    const handleInput = event =>{
        let value = event.target.value;
        setValues({
            [event.target.name] : value
        });
    };

    const handleSubmit = event =>{
        if(event.key == "Enter" || event.type == "click"){
        event.preventDefault();
        const movieSearch = async() =>{
            let responseSearch;
            console.log(searchUrl);
            await fetch(`${searchUrl}?${apiKey}&${lenguage[0]}&query=${form.videoSearch.replace(" ","+")}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(responseJson => responseSearch = responseJson);

            return responseSearch;
        };
        const response = movieSearch();
        response.then(responseSearch => responseSearch.results != undefined ?  props.searchVideo(responseSearch.results) : null);
        };
    };

    const handleTrim = () => {
        props.searchVideo([]);
    };

    return(
    <section className="main">
        <h2 className="main__title">What do you want to see today?</h2>
        <input
            id="value"
            onChange={handleInput}
            onKeyPress={handleSubmit}
            name="videoSearch" 
            className="input" 
            type="search" 
            placeholder="Search.." 
        />
        <div className='containerButtons'>
            <button type='button' className='buttonSearch' onClick={handleSubmit}>Search</button>
            <button type='button' className='buttonRemove' onClick={handleTrim}>Clear</button>
        </div>     
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