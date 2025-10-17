import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/Products.css"
import browneggs from "../assets/browneggs.jpg"
import poultryhome from "../assets/poultryhome.jpg"
import ProductCard from '../components/ProductCard'

function Products() {
  const productData = [
    {
      id: 1,
      name: 'Chicken',
      description: 'Fresh farm-raised chicken.',
      price: '₦2500',
      image: poultryhome// or replace with your local asset
    },
    {
      id: 2,
      name: 'Eggs',
      description: 'Organic brown eggs.',
      price: '₦500',
      image: browneggs// if using a local image
    }
  ];

  return (
    <div>
      <section className="products">
        <div className="products-page">
          <h1>Our Products</h1>
          <div className="product-list">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
