import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <a href="#" onClick={() => handlePageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a href="#" onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </a>
        </li>
        {renderPageNumbers()}
        <li className={currentPage === totalPages ? 'disabled' : ''}>
          <a href="#" onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;