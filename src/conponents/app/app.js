import React from 'react';
import './app.css';
import Input from '../input/input.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';

export default function App(){
    return (
    <div data-testid="element-app" className="wrapper-app">
        <Header />
        <Input />
        <Footer />
    </div>
    );
}