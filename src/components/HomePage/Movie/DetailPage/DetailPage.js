import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Menubar from '../../Menubar/Menubar';
import "./DetailPage.css";
import { apiKey } from '../../../api';
import Header from '../../Header/Header';

const DetailPage = (props) => {
    const [detail, setDetail] = useState({
        info: [],
        genre: [],
        companies: [],
        spoke: []

    });

    useEffect(() => {
        detailMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const detailMovie = () => {
        const movie_id = props.match.params.id;

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?${apiKey}&language=en-US`)
            .then((res) => {
                setDetail({
                    info: res.data,
                    genre: res.data.genres,
                    companies: res.data.production_companies,
                    spoke: res.data.spoken_languages
                })
            })
    }

    console.log(detail.info)

    return (
        <div>
            <div className="main-content">
                <Row>
                    <Col md={4}>
                        <img src={`https://image.tmdb.org/t/p/w300/${detail.info.poster_path}`} alt="poster" />
                    </Col>
                    <Col md={8}>
                        <Table striped={false} borderless={true}>
                            <tbody>
                                <tr>
                                    <td colSpan={3}>
                                        <h2>{detail.info.title}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td>{detail.genre.map((item) => (
                                        <span key={item.id}> {item.name}, </span>
                                    ))}</td>
                                </tr>
                                <tr>
                                    <td>IMDB ID</td>
                                    <td>:</td>
                                    <td>https://www.imdb.com/title/{detail.info.imdb_id}</td>
                                </tr>
                                <tr>
                                    <td>Release Date</td>
                                    <td>:</td>
                                    <td>{detail.info.release_date}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td>{detail.companies.map((item) => (
                                        <span key={item.id}> {item.name}, </span>
                                    ))}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>:</td>
                                    <td>{detail.info.status}</td>
                                </tr>
                                <tr>
                                    <td>Runtime</td>
                                    <td>:</td>
                                    <td>{detail.info.runtime} minutes</td>
                                </tr>
                                <tr>
                                    <td>Vote Average</td>
                                    <td>:</td>
                                    <td>{detail.info.vote_average}</td>
                                </tr>
                                <tr>
                                    <td>Spoken Languages</td>
                                    <td>:</td>
                                    <td>{detail.spoke.map((item, index) => (
                                        <span key={index}> {item.name}, </span>
                                    ))}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan={2}>
                                        <div className="watch-trailer">
                                            <a href="#trailer">Watch Trailer</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <p className="sinopsis">Sinopsis</p>
                        <p className="overview">{detail.info.overview}</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DetailPage;