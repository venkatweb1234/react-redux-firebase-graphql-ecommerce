import React from 'react';
import Directory from '../Directory/directory-component';
import './page-style.scss';

const Homepage = props =>{
    return(
        <section className="homePage" data-test="homePageComponent">
            <Directory />
        </section>
    )
}

export default Homepage;