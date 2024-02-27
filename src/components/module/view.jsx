import React from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { dataportfolio } from "./content_option.js";

const View = () => {
    const { id } = useParams();

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pt-3 d-flex justify-content-center">
                        {dataportfolio.map(item => {
                            if (item.id == id) {
                                return (
                                    <>
                                        <img
                                            className="img-fluid"
                                            src={item.img}
                                        />
                                    </>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default View;
