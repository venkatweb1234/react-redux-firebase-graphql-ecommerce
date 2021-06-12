import React from 'react';
import Footer from '../../components/Footer/footer-component';
import Header from '../../components/Header/header-component';

const MainLayout = props =>{
    return(
        <div>
            <Header {...props} />
            <div className="main" data-test="mainCompoent">
                {props.children}
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout;