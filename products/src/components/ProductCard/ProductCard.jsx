import './ProductCard.css';

export default function ProductCard({
  product,
  deleteProduct,
  increasePrice,
  decreasePrice,
}) {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <div className="square-image position-relative">
            <img src={product.image} alt="" />
          </div>
          <div className="card-body border-top">
            <p className="card-title text-nowrap overflow-hidden fw-bold h4 text-center">
              {product.title}
            </p>
            <div className="d-flex justify-content-around align-items-center">
              <button
                className="btn btn-outline-primary rounded-start-4"
                onClick={() => {
                  decreasePrice(product.id);
                }}
              >
                <i class="fa-solid fa-minus"></i>
              </button>

              <p className="card-title h5 mt-1">${product.price}</p>

              <button
                className="btn btn-outline-primary rounded-end-4"
                onClick={() => {
                  increasePrice(product.id);
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>

          <button
            className="btn btn-danger mx-2 mb-2"
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            Delete Product
          </button>
        </div>
      </div>
    </>
  );
}
