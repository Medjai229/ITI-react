import React, { useContext } from 'react';
import { PaginationContext } from '../../context/PaginationContext';

export default function Pagination() {
  let { page, prevPage, nextPage, setPage, totalPages } =
    useContext(PaginationContext);

  return (
    <div className="d-flex justify-content-center gap-1">
      <button
        className={`btn btn-outline-secondary h-100 ${
          page == 1 ? 'disabled' : ''
        }`}
        onClick={() => {
          prevPage();
        }}
      >
        prev
      </button>
      <button
        className={`btn btn-outline-secondary h-100 ${
          page - 2 < 1 ? 'd-none' : ''
        }`}
        onClick={() => setPage(page - 2)}
      >
        {page - 2}
      </button>
      <button
        className={`btn btn-outline-secondary h-100 ${
          page - 1 < 1 ? 'd-none' : ''
        }`}
        onClick={() => setPage(page - 1)}
      >
        {page - 1}
      </button>
      <p className="btn btn-secondary">{page}</p>
      <button
        className={`btn btn-outline-secondary h-100 ${
          page + 1 > totalPages ? 'd-none' : ''
        }`}
        onClick={() => setPage(page + 1)}
      >
        {page + 1}
      </button>
      <button
        className={`btn btn-outline-secondary h-100 ${
          page + 2 > totalPages ? 'd-none' : ''
        }`}
        onClick={() => setPage(page + 2)}
      >
        {page + 2}
      </button>
      <button
        className={`btn btn-outline-secondary h-100 ${
          page == totalPages ? 'disabled' : ''
        }`}
        onClick={() => {
          nextPage();
        }}
      >
        next
      </button>
    </div>
  );
}
