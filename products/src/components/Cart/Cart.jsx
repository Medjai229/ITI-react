import React, { useEffect } from 'react';
import { getCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import useSize from '../../hooks/useSize';

export default function Cart() {
  const { cart, isLoading, length } = useSelector((state) => state.cart);
  const [width, height] = useSize();

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="container mt-5">
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <p className="fw-bold mb-4 h2">Your Shopping Cart</p>
      <p className="fw-bold mb-4 h4">Total items: {length}</p>
      {isLoading ? (
        <div className="d-flex my-5">
          <BeatLoader speedMultiplier={0.7} className="mx-auto" />
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top p-3"
                    style={{ height: '150px', objectFit: 'contain' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">Qty: {item.quantity}</span>
                        <span className="fw-bold text-success">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <button className="btn btn-danger w-100 mt-3">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-end">
        <p className="fw-bold h4">
          Total: $
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
        <button className="btn btn-success mt-2">Checkout</button>
      </div>
    </div>
  );
}
