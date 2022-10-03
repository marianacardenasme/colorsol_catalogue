import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.js';
import Header from './components/Header';
import Menu from './components/Menu';
import Error from './components/Error';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer.js';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <BrowserRouter>
    <Helmet>
        <meta charSet="utf-8" />
        <title>COLOR SOL</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="COLOR SOL" />
    </Helmet>
    <Routes>
      <Route path="/" element={<><Header /> <HomePage /> <Footer /> </>} />
      <Route path="/:name" element={<SingleProduct />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
