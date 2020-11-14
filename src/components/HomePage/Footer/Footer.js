import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <Row>
                <Col md={7}>
                    <div className="footer-left">
                        <li>
                            <a href="https://21cineplex.com/21profile">
                                Profile
                                </a>
                        </li>
                            |
                                <li>
                            <a href="https://21cineplex.com/termofuse">
                                Terms of Use
                                </a>
                        </li>
                            |
                                <li>
                            <a href="https://21cineplex.com/page/page-info-iklan">
                                Advertising
                                </a>
                        </li>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="footer-right">
                        <li>
                            <a href="https://www.instagram.com/cinema.21/?hl=id">
                                <FaInstagram />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/CinemaXXI/">
                                <FaFacebookF />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/cinema21">
                                <FaTwitter />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/user/KanalXXI/videos">
                                <FaYoutube />
                            </a>
                        </li>
                    </div>
                </Col>

                <p className="footer-text">
                    © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.
                    Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside
                    PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya
                    </p>
            </Row>
        </div>
    )
}

export default Footer
