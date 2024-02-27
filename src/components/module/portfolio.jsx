import React from "react";
import { dataportfolio } from "./content_option.js";

import { Link, NavLink } from "react-router-dom";
const PortfolioComp = () => {
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <h1 className="display-4 mb-4">Portfolio</h1>
                            <hr className="t_border my-4 ml-0 text-left" />
                        </div>
                        <div className="row p-2">
                            {dataportfolio.map(item => {
                                return (
                                    <>
                                        <div className="col-12 col-md-6 col-xl-4 mt-3">
                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-center g-2 p-2">
                                                    <NavLink
                                                        to={`/Portfolio/${item.id}`}
                                                        className="nav-link"
                                                    >
                                                        <img
                                                            className="img-fluid "
                                                            src={item.img}
                                                            alt="Portfolio-image"
                                                            style={{
                                                                height: "250px"
                                                            }}
                                                            data-aos="fade zoom-in"
                                                        />
                                                    </NavLink>
                                                </div>
                                                <hr className="t_border my-2 ml-0 text-left" />
                                            </div>
                                            <div className="col-12 ft">
                  {item.description}                          
 </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioComp;
