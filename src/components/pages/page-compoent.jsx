import React from 'react';
import Directory from '../Directory/directory-component';
import './page-style.scss';

const Homepage = props =>{
    return(
        <section className="homePage">
            <Directory />
        </section>
    )
}

export default Homepage;