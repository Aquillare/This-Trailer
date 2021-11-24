import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = props => {
    console.log(props);
    return(
   
        <section className="error">
            <div className="error__404">404</div>
            <p className="error__p">página no encontrada</p>
        </section>
    
);
}
export default NotFound;