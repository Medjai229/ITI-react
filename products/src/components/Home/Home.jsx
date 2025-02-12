import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

export default function () {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      let { data } = await axios.get('https://fakestoreapi.com/products');
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="d-flex my-5">
          <input
            type="text"
            className="form-control me-3"
            id="search"
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="row" id="products">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
