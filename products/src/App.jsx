import { useState } from 'react';
import wdnstool from './assets/1.png';
import gldnwtch from './assets/2.png';
import gpu from './assets/3.png';
import hrddsk from './assets/4.png';
import ProductCard from './ProductCard';

function App() {
  const [products, setNewProducts] = useState([
    { id: 1, title: 'Wooden Stool', price: 20, image: wdnstool },
    { id: 2, title: 'Golden Watch', price: 100, image: gldnwtch },
    { id: 3, title: 'Graphics Card', price: 150, image: gpu },
    { id: 4, title: 'Hard Disk', price: 70, image: hrddsk },
  ]);
  const [searchValue, setNewSearch] = useState('');
  console.log(searchValue);

  function deleteProduct(id) {
    let newProducts = structuredClone(products);

    newProducts = newProducts.filter((product) => product.id != id);

    setNewProducts(newProducts);
  }

  function increasePrice(id) {
    let newProducts = structuredClone(products);

    const newProduct = newProducts.find((product) => product.id == id);
    newProduct.price += 10;

    setNewProducts(newProducts);
  }

  function decreasePrice(id) {
    let newProducts = structuredClone(products);

    const newProduct = newProducts.find((product) => product.id == id);
    newProduct.price -= 10;
    if (newProduct.price < 0) {
      newProduct.price = 0;
    }

    setNewProducts(newProducts);
  }

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
            onChange={(e) => setNewSearch(e.target.value)}
          />
        </div>
        <div className="row" id="products">
          {searchedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
