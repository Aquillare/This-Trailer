import React from 'react';
import '../assets/styles/Layout.scss';
import Footer from './Footer';

const Layout = ( {children} ) => (

    <div className="App">
        
            {children}
        <Footer/>
        
    </div>
);

export default Layout;