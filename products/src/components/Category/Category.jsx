import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import { BeatLoader } from 'react-spinners';

export default function Category() {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  async function getCategories() {
    try {
      let { data } = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      console.log(data);
      setCategories(data);
      setCategory(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
  async function getProducts(category) {
    setProducts([]);
    try {
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (category) getProducts(category);
  }, [category]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between gap-3 my-5">
          {categories.length == 0 ? (
            <BeatLoader speedMultiplier={0.7} className="mx-auto" />
          ) : (
            <>
              {categories.map((category) => (
                <button
                  className="btn btn-lg btn-outline-secondary col"
                  onClick={(e) => setCategory(e.target.textContent)}
                  key={category}
                >
                  {category}
                </button>
              ))}
            </>
          )}
        </div>
        <div className="row" id="products">
          {products.length == 0 ? (
            <div className="d-flex my-5">
              <BeatLoader speedMultiplier={0.7} className="mx-auto" />
            </div>
          ) : (
            <>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
