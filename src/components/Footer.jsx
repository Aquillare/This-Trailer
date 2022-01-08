import React from 'react';
import '../assets/styles/components/Footer.scss';
import tmdb from '../assets/static/tmDb.svg';

const Footer = () => (

    <footer className='footer'>
        <div className='name_container'>
            <p>
                Miguel Aguilar © 2022
            </p>
        </div>
        <div className='reference_container'>
            <img src={tmdb}/>
        </div>
    </footer>
);


export default Footer;