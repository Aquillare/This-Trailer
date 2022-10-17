import React,{useEffect} from "react";
import { connect } from "react-redux";
import { resultSearch } from "../actions";
import {setFavorite, deleteFavorite, searchVideo} from '../actions';
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/Carrouseltem";
import '../assets/styles/components/Searching.scss';

const ResultSearch = props => {

    useEffect(() => {

    }, [props.search]);

    return (
        <>
            {props.search.length > 0 ?

                <Carrousel>

                    {props.search.map(item => item.poster_path != null ?
                        <CarrouselItem key={item.id} {...item} />
                        :
                        null
                    )

                    }

                </Carrousel>
                :
                null
            }
        </>
    );
};

const mapStateToProps = state => {
    return{
        search : state.search,
    };
};

const mapDispatchToProps = {
    resultSearch,
    deleteFavorite,
    setFavorite,
    searchVideo,
};

export default connect(mapStateToProps,mapDispatchToProps)(ResultSearch);
