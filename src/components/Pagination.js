import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getStories } from "../services/Stories.service";

function Pagination({ stories, setDisplayedStories }) {

  const [ numberOfCurrentPage, setNumberOfCurrentPage ] = useState(1);
  const storiesPerPage = 10;
  const numberOfPages = Math.ceil(stories.length/storiesPerPage)
  const lastIndex = storiesPerPage * numberOfCurrentPage;
  const firstIndex = lastIndex - storiesPerPage;

  useEffect(()=>{
    getStories(stories, firstIndex, lastIndex)
      .then(data => {
        setDisplayedStories(data)
      })
  }, [setDisplayedStories ,stories, firstIndex, lastIndex]);

  const nextPage = (currentPage) => {
    const nextPage = currentPage + 1;
    nextPage < numberOfPages && setNumberOfCurrentPage(nextPage)
  };

  const prevPage = (currentPage) => {
    const prevPage = currentPage - 1;
    prevPage >= 1 && setNumberOfCurrentPage(prevPage)
  };

  return (
    <ul className="pagination pt-3">
      <li className="page-item">
        <Link to="#" onClick={ () => prevPage(numberOfCurrentPage) } className="page-link">Prev</Link>
      </li>
      <li className="page-item">
        <Link to="#" onClick={ () => nextPage(numberOfCurrentPage) } className="page-link">Next</Link>
      </li>
    </ul>
  );
}

export default Pagination;
