import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({
  product,
  deleteProduct,
  increasePrice,
  decreasePrice,
}) {
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
}
