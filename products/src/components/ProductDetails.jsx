import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  async function getProduct(id) {
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct(id);
  }, []);

  function chooseStar(i) {
    if (i < Math.floor(product?.rating?.rate)) {
      return 'fa-solid fa-star';
    } else if (i < product?.rating?.rate) {
      return 'fa-solid fa-star-half-stroke';
    } else {
      return 'fa-regular fa-star';
    }
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className={`${chooseStar(i)}`}></i>);
  }

  return (
    <div className="d-flex">
      <div>
        <img src={product.image} alt="Product image" />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>
          {stars} ({product?.rating?.count})
        </p>
        <p>${product.price}</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
}
