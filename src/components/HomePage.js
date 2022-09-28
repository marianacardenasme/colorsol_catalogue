import React from 'react';
import './HomePage.css';
import items from '../items.json';
import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [product] = useState(items)

  return (
    <div className="HomePage">
      {product.products.map(({ name, price, picture }) => (
        <div className="box" key={name}>
          <Link to={`/${name}`} >
            <img src={picture} alt={name}/>
            <div className='innerbox'>
              <h1>{name}</h1>
              <h2>{price}</h2>
            </div>
          </Link>  
        </div>
      ))}
    </div>
  )
}

export default HomePage;