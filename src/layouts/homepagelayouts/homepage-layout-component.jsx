import React from 'react';
import Footer from '../../components/Footer/footer-component';
import Header from '../../components/Header/header-component';

const HomepageLayout = props => {
    return (
        <div data-test="HomepageCompoent">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default HomepageLayout;