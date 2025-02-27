import axios from 'axios';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

export default function ProductCard({
  product,
  deleteProduct,
  increasePrice,
  decreasePrice,
}) {
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

  return (
    <>
      {console.log(mutation.isSuccess)}
      <div className="col-3 mb-4">
        <div className="card">
          <Link
            to={`/product/${product.id}`}
            className="square-image position-relative d-block"
          >
            <img src={product.image} alt="" />
          </Link>
          <div className="card-body border-top">
            <Link
              to={`/product/${product.id}`}
              className="card-title text-nowrap overflow-hidden fw-bold h4 text-center text-decoration-none d-block"
            >
              {product.title}
            </Link>
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-title h5 mt-1">${product.price}</p>
              <p className="card-title h5 mt-1">
                {product.rating.rate}
                <i className="fa-solid fa-star text-warning "></i>
              </p>
            </div>
            <button
              className="btn btn-outline-secondary ms-auto"
              onClick={() => mutation.mutate(product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
