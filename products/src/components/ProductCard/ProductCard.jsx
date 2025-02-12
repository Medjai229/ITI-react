import './ProductCard.css';

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
          <div className="square-image position-relative">
            <img src={product.image} alt="" />
          </div>
          <div className="card-body border-top">
            <p className="card-title text-nowrap overflow-hidden fw-bold h4 text-center">
              {product.title}
            </p>
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
