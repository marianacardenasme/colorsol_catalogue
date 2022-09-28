import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.js';
import Header from './components/Header';
import Menu from './components/Menu';
import Error from './components/Error';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header /> <HomePage /> <Footer /> </>} />
      <Route path="/:name" element={<SingleProduct />}></Route>
      <Route path="*" element={<Error />}></Route>
      {/* <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300&family=Yeseva+One&display=swap" rel="stylesheet"/>
    </div> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
