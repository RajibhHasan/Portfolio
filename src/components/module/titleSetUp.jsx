import React, { useState, useEffect } from "react";

import Helmet from "react-helmet";

const Title = ({title}) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            <meta name="keywords" content="Skill, Html,CSS, JavaScript,portfolio" />
                <meta name="author" content="Rajib hasan" />
            <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
    <link rel="icon" href="../../../public/images/1000194988-removebg-preview.png" type="image/icon type" />
                
                
            </Helmet>
        </>
    );
};

export default Title;
