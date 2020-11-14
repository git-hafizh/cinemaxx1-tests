import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './AllUpcoming.css';
import { Button } from 'react-bootstrap';
import useFetchMovie from '../../../../Hooks/useFetchMovie';
import LoadingIndicator from '../../../LoadingIndicator';

const AllUpcoming = () => {
  const [page, setPage] = useState(1);
  const [soon] = useFetchMovie(page);

  return (
    <div>
      <div className="main-badge">
        <p className="upcoming-badge">Upcoming</p>
      </div>
      <div className="soon-list">
        {soon.map((item) => (
          <div className="soon-item" key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster" />
              <p className="soon-title">{item.title ? item.title : item.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <LoadingIndicator/>
      <Button variant="secondary" onClick={() => setPage(page + 1)}>Load More Movies</Button>
    </div>
  )
}

export default AllUpcoming
