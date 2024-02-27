import { useState, useEffect } from "react";

import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import View from "./components/module/view.jsx"

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/module/footer.jsx";
import Portfolio from "./components/Portfolio.jsx";

const App = () => {
    useEffect(() => {
        Aos.init({ duration: "1500" });
    }, []);

    return (
        <>
            <div>
                <BrowserRouter>
                    <div className="container-fluid bg-info sticky-top">
                        <nav className="navbar navbar-expand-md ">
                            <div className="container-fluid ">
                                <a className="navbar-brand" href="#">
                                    <img
                                        className="img"
                                        src="../public/images/Photo_1708409821754.png"
                                        style={{ width: "30px" }}
                                    />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse d-md-flex justify-content-end"
                                    id="navbarNav"
                                >
                                    <ul className="navbar-nav   p-3 d-flex align-items-center text-dark text-uppercase ft float-right g-3">
                                        <li className="nav-item  ">
                                            <NavLink
                                                to="/"
                                                className="nav-link  "
                                                aria-current="page"
                                                href="#"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/About"
                                                className="nav-link"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/Contact"
                                                className="nav-link"
                                            >
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/Portfolio"
                                                className="nav-link"
                                            >
                                                Portfolio
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/About" element={<About />} />

                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                                   <Route path="/Portfolio/:id" element={<View />} />

                        <Route path="*" element={<Home />} />
                    </Routes>
                    <div className="container-fluid p-0 fixed-md-bottom">
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
