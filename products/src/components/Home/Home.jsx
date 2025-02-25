import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import { BeatLoader } from 'react-spinners';
import { PaginationContext } from '../../context/PaginationContext';
import Pagination from '../Pagination/Pagination';

export default function () {
  let { paginatedProducts } = useContext(PaginationContext);

  return (
    <>
      <div className="container">
        <div className="my-5">
          {paginatedProducts.length == 0 ? (
            <div className="d-flex my-5">
              <BeatLoader speedMultiplier={0.7} className="mx-auto" />
            </div>
          ) : (
            <>
              <div className="row" id="products">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>

        <Pagination />
      </div>
    </>
  );
}
