import React from 'react';
import '../assets/styles/components/CarrouselItem.scss'
import PlayIcon from "../assets/static/play-icon.png"
import PlusIcon from "../assets/static/plus-icon.png"
import PropTypes from 'prop-types';



const CarrouselItem = ({cover, title, year, duration, contentRating }) => (

    <div className="carrousel-item">
    <img className="carrousel-item__img" src={cover} alt="cover"/>
    <div className="carrousel-item__details">
        <div>
            <img src={PlayIcon} alt="play"/>
            <img src={PlusIcon} alt="plus"/>
        </div>
        <p className="carrousel-item__details--title">{title}</p>
        <p className="carrousel-item__details--subtitle">{`${year} ${contentRating} ${duration}minutos`}</p>  
    </div>                   
</div>
);

CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    contentRating: PropTypes.string,
};

export default CarrouselItem;