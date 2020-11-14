import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import "./Header.css";
import Home from '../../../assets/home.png';
import Logo from '../../../assets/logo.png';
import SearchMovie from './SearchMovie/SearchMovie';
import axios from 'axios';
import { apiKey } from '../../api';

const Header = () => {
    const [getMovie, setGetMovie] = useState([]);

    const GetMovies = async (GetMovies) => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=${GetMovies}&page=1&include_adult=false`)
            .then((res) => {
                setGetMovie(res.data.results);
            });
    };

    console.log(getMovie)

    return (
        <div>
            <Navbar style={{ backgroundColor: "#006563", padding: "0rem 3rem" }} expand="lg">
                <NavbarBrand href="#">
                    <img src={Home} alt="home-logo" />
                </NavbarBrand>
                <NavbarBrand href="#">
                    <img src={Logo} alt="logo" />
                </NavbarBrand>
                <SearchMovie getMovie={getMovie} GetMovies={GetMovies} />
                
            </Navbar>
        </div>
    )
}

export default Header;