import React, { useState, useEffect } from "react";
import "../../../public/stylesheet/About.css";

import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import {
    dataabout,
    meta,
    worktimeline,
    skills,
    services
} from "../module/content_option.js";

const AboutComp = () => {
    return (
        <>
            <Container className="About-header">
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4" data-aos="fade-right">
                            About me
                        </h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4 fm">{dataabout.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center ft">
                        <div>
                            <p>
                                <Typewriter
                                    options={{
                                        strings: [dataabout.aboutme],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 10
                                    }}
                                />
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className=" sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Work Timline</h3>
                    </Col>
                    <Col lg="7" data-aos="flip-right">
                        <table className="table caption-top">
                            <tbody>
                                {worktimeline.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{data.jobtitle}</th>
                                            <td>{data.where}</td>
                                            <td>{data.date}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4 ft">Skills</h3>
                    </Col>
                    <Col lg="7" data-aos="zoom-in">
                        {skills.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title fm">
                                        {data.name}
                                    </h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`
                                            }}
                                        >
                                            <div className="progress-value">
                                                {data.value}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lang="5">
                        <h3 className="color_sec py-4 fm">Services</h3>
                    </Col>
                    <Col lg="7">
                        {services.map((data, i) => {
                            return (
                                <div className="service_ py-4 " key={i}>
                                    <h5 className="service__title ft">
                                        {data.title}
                                    </h5>
                                    <p
                                        className="service_desc ft"
                                        data-aos="fade zoom-in"
                                    >
                                        {data.description}
                                    </p>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default AboutComp;
