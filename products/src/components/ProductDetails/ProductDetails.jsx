import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { useMutation } from '@tanstack/react-query';

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

  async function addCart(id) {
    let res = await axios.post('https://fakestoreapi.com/carts', {
      userId: 5,
      date: new Date(),
      products: [{ productId: id, quantity: 1 }],
    });
  }

  const mutation = useMutation({
    mutationFn: addCart,
  });

  if (mutation.isSuccess) {
    toast.success('Product Added', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
    });
  }

  if (mutation.isError) {
    toast.error('Failed to add product', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
    });
  }

  function chooseStar(i) {
    if (i < Math.floor(product?.rating?.rate)) {
      return 'fa-solid fa-star text-warning';
    } else if (i < product?.rating?.rate) {
      return 'fa-solid fa-star-half-stroke text-warning';
    } else {
      return 'fa-regular fa-star text-warning';
    }
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<i key={i} className={`${chooseStar(i)}`}></i>);
  }

  return (
    <>
      {Object.keys(product).length == 0 ? (
        <div className="d-flex my-5">
          <BeatLoader speedMultiplier={0.7} className="mx-auto" />
        </div>
      ) : (
        <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src={product.image}
                alt="Product image"
                className="img-fluid"
                style={{ width: '100%', height: '350px', objectFit: 'contain' }}
              />
            </div>

            <div className="col-md-7">
              <h2 className="fw-bold">{product.title}</h2>
              <span className="badge bg-secondary h4">{product.category}</span>
              <p className="lead">{product.description}</p>
              <p className="h3">${product.price}</p>

              <div className="mb-3">
                {stars}{' '}
                <span className="text-muted">
                  ({product?.rating?.count} reviews)
                </span>
              </div>

              <button
                className="btn btn-outline-secondary px-4 py-2"
                onClick={() => mutation.mutate(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
