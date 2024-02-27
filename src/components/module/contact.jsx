import React, { useState } from "react";

import axios from "axios";

import "../../../public/stylesheet/Contact.css";

import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "./content_option.js";

const ContactComp = () => {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: ""
    });

    const handleSubmit = async e => {
        e.preventDefault();
        setFormdata({ loading: true });
        try {
            const response = await axios.post(
                "http://localhost:5175/Comment",
                formData
            );
            console.log("Response:", response.data);
            setFormdata({ loading: false });
            setFormdata({ alertmessage: response.data.message });
        } catch (error) {
            console.error("Error:", error);
            setFormdata({ loading: false });

            setFormdata({ alertmessage: error.message });
            console.log(formData);
        }
    };

    const handleChange = e => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Container>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4 ft">Contact Me</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="12">
                        <Alert
                            //show={formData.show}
                            variant={formData.variant}
                            className={`rounded-0 co_alert ${
                                formData.show ? "d-block" : "d-none"
                            }`}
                            onClose={() => setFormdata({ show: false })}
                            dismissible
                        >
                            <p className="my-0">{formData.alertmessage}</p>
                        </Alert>
                    </Col>
                    <Col lg="5" className="mb-5">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <address>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                                {contactConfig.YOUR_EMAIL}
                            </a>
                            <br />
                            <br />
                            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                                <p>
                                    <strong>Phone:</strong>{" "}
                                    {contactConfig.YOUR_FONE}
                                </p>
                            ) : (
                                ""
                            )}
                        </address>
                        <p className=" ft p-4" data-aos="fade-out zoom-in">
                            {contactConfig.description}
                        </p>
                    </Col>
                    <Col
                        lg="7"
                        className="d-flex align-items-center"
                        data-aos="fade"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="contact__form w-100"
                        >
                            <Row>
                                <Col
                                    lg="6"
                                    className="form-group "
                                    data-aos="fade"
                                >
                                    <input
                                        className="foralign-items-center mt-1 text-info"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name || ""}
                                        type="text"
                                        required
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col
                                    lg="6"
                                    className="form-group mt-2"
                                    data-aos="fade"
                                >
                                    <input
                                        className="form-control rounded-0 bg-white text-primary border border-info"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        value={formData.email || ""}
                                        required
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            <textarea
                                className="form-control rounded-0 bg-white text-primary border border-info"
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {formData.alertmessage && (
                                <p className="text-warning f-2">
                                    {formData.alertmessage}
                                </p>
                            )}
                            <br />
                            <Row>
                                <Col
                                    lg="12"
                                    className="form-group  mb-2"
                                    data-aos="fade"
                                >
                                    <button
                                        className="btn d-block bg-info w-100 mb-2"
                                        type="submit"
                                    >
                                        {formData.loading
                                            ? "Sending..."
                                            : "Send"}
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </>
    );
};
export default ContactComp;
