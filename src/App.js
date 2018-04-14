import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import './App.css';

const closeMenu = (e) => {

    let wrapper = document.querySelector('.wrapper'),
    canvas = document.querySelector('.canvas')

    if (e.target === canvas) {
        if (wrapper.classList.contains('show-menu')) {
            wrapper.classList.remove('show-menu');
        }    
    }
    
}

const App = () => {
    return (
        <div className="wrapper" onClick={closeMenu}>
            <div className="canvas" >
                <div className="menu">
                    <Cart />
                </div>
                <ProductList />
            </div>
        </div>
    );
}

export default App;
