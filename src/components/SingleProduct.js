import React, { useState, useEffect } from "react";
import SProduct from './SingleProduct.css';
import items from "../items.json";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  let [singleProduct, setSingleProduct] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const findProduct = () => {
      const newProduct = items.products.find((product) => product.name === name)
      setSingleProduct(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  return (
    <div>
      <div className="Information">
        <img  src={singleProduct.picture} alt={singleProduct.name} />
        <div>
          <h1>{name}</h1>
          <p>{singleProduct.category}</p>
          <p>{singleProduct.description}</p>
          <p>{singleProduct.aditionalinfo}</p>
          <h2>{singleProduct.price}</h2>
          <a>
            <Link to="/">Volver</Link>
          </a>
        </div>
      </div>
      <div className="Pictures">
        <img  src={singleProduct.picture2} alt={singleProduct.name} />
        <img  src={singleProduct.picture3} alt={singleProduct.name} />
        <img  src={singleProduct.picture4} alt={singleProduct.name} />
      </div>
    </div>
  )
}
