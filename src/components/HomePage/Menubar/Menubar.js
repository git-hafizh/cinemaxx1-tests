import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap';
import './Menubar.css';
import Imax from '../../../assets/imax-menu.png'
import Dolby from '../../../assets/dolby-menu.png'
import Mtix from '../../../assets/mtix-menu.png'

const Menubar = () => {
    return (
        <div className="main-menubar">
            <Navbar style={{ backgroundColor: "#f4f4f4", padding: "0 1rem" }}expand="lg">
                <li>
                    <a href="#/">
                        <div className="link-menu now-playing">
                            Now Playing
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#/comingsoon">
                        <div className="link-menu upcoming">
                            Upcoming
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div className="link-menu theaters">
                            Theaters
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <div className="link-menu promotions">
                            Promotions
                        </div>
                    </a>
                </li>
                <NavDropdown className="link-menu info" title="Info 21">
                    <NavDropdown.Item href="#">Movie News</NavDropdown.Item>
                    <NavDropdown.Item href="#">New Opening</NavDropdown.Item>
                    <NavDropdown.Item href="#">Quizzes</NavDropdown.Item>
                </NavDropdown>
                <div className="partner">
                    <a href="https://21cineplex.com/imax">
                        <img src={Imax} alt="imax" />
                    </a>
                    <a href="https://21cineplex.com/dolby-atmos">
                        <img src={Dolby} alt="dolby" />
                    </a>
                    <a href="https://mtix.21cineplex.com/?mod=mtix">
                        <img src={Mtix} alt="mtix" />
                    </a>
                </div>

            </Navbar>
        </div>
    )
}

export default Menubar;
