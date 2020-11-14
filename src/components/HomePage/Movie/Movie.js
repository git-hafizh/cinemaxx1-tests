import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Movie.css";
import { apiKey } from '../../api';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Movie = () => {
   const [movies, setMovies] = useState([]);
   const [upcoming, setUpcoming] = useState([]);

   useEffect(() => {
      fetchMoviesPlaying();
      fetchMoviesUpcoming();
   }, [])

   const fetchMoviesPlaying = () => {
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=1`)
         .then((res) => {
            const sliceMovie = res.data.results.slice(0, 4)
            setMovies(sliceMovie)
         })
   }

   const fetchMoviesUpcoming = () => {
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=1`)
         .then((res) => {
            const sliceMovie = res.data.results.slice(0, 4)
            setUpcoming(sliceMovie)
         })
   }

   const voteColor = (votes) => {
      if (parseFloat(votes) >= 7) {
         return "#05c46b"
      }
      else if (parseFloat(votes) >= 4) {
         return "#ffa801"
      }
      else if (parseFloat(votes) >= 0) {
         return "#ff3f34"
      }
   }

   return (
      <div>
         <div className="main-playing">
            <p className="playing-badge">Now Playing</p>
            <NavDropdown className="city" title="Pilih Kota">
               <NavDropdown.Item href="#">Jakarta</NavDropdown.Item>
               <NavDropdown.Item href="#">Bandung</NavDropdown.Item>
               <NavDropdown.Item href="#">Surabaya</NavDropdown.Item>
            </NavDropdown>
         </div>
         <div className="movie-list">
            {movies.map((item) => (
               <div className="movie-item" key={item.id}>
                  <Link to={`/movie/${item.id}`}>
                     <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="poster" />
                     <p className="movie-title">{item.title ? item.title : item.name}</p>
                  </Link>
                  <span className="movie-vote" style={{ backgroundColor: voteColor(item.vote_average) }}>{item.vote_average}</span>
               </div>
            ))}
         </div>
         <div className="main-badge">
            <p className="upcoming-badge">Upcoming</p>
         </div>
         <div className="movie-list">
            {upcoming.map((item) => (
               <div className="movie-item" key={item.id}>
                  <Link to={`/movie/${item.id}`}>
                     <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="poster" />
                     <p className="movie-title">{item.title ? item.title : item.name}</p>
                  </Link>
                  <span className="movie-vote" style={{ backgroundColor: voteColor(item.vote_average) }}>{item.vote_average}</span>
               </div>
            ))}
         </div>
         <Link to={`/comingsoon`}>
            <p className="allUpcoming">View More</p>
         </Link>
      </div>
   )
}

export default Movie;
