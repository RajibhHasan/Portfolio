import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../../public/stylesheet/Home.css";

import Theme from "../components/module/theme.jsx";
import Title from "../components/module/titleSetUp.jsx"
import AboutComp from "../components/module/about.jsx";
import ContactComp from "../components/module/contact.jsx";

const Home = () => {
    return (
        <>
        <Title title="Home" />
            <div className="container-fluid p-0">
                <Theme />
            </div>

            <div className="container-fluid bg-dark text-white pt-2 ">
                <AboutComp />
                <ContactComp />
            </div>
        </>
    );
};

export default Home;
