import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export let PaginationContext = createContext();

export default function PaginationContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const itemsInPage = 4;
  const totalPages = Math.ceil(products.length / itemsInPage);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    paginateProducts();
  }, [page, products]);

  async function getProducts() {
    try {
      let { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  function paginateProducts() {
    const lastItemIdx = page * itemsInPage;
    const firstItemIdx = lastItemIdx - itemsInPage;
    setPaginatedProducts(products.slice(firstItemIdx, lastItemIdx));
  }

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        totalPages,
        nextPage,
        prevPage,
        paginatedProducts,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
