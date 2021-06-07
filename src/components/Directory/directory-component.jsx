import React from 'react';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';
import './directory-style.scss';
const Directory = props => {
    return (
        <div className="directory" data-test="directoryComponent">
            <div className="wrap">
                <div className="item" data-test="shopWomenComponent" style={{ backgroundImage: `url(${ShopWomen})` }}>
                    <a>Shop Womens</a>
                </div>
                <div className="item" data-test="shopMenComponent" style={{ backgroundImage: `url(${ShopMen})` }}>
                    <a>Shop Mens</a>
                </div>

            </div>

        </div>
    )
}

export default Directory;