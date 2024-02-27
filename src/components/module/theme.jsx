import React from "react";
import Typewriter from "typewriter-effect";
import {introdata} from "./content_option.js"
const Theme = () => {
    return (
        <>
            <div>
                <div className=" container-fluid bg-dark pt-2">
             <div className="row"  >
          <div className="col-12 col-md-6 text-white">

         <div className=" m-auto "
                        style={{
                            height: "200px",
                            width: "200px",
                            borderRadius: "50%",
                            overflow: "hidden"
                        }}
                  data-aos="flip-up"  >
                        <img
                            className="rounded-circle w-100"
                            src="../../../public/images/PhotoShot_1683366807667.jpeg"
                        />
                        </div>


                    </div>
<div className="col-12 col-md-3  text-white mt-sm-3  pt-3">
<div className="m-auto p-2">
                <h2 className="mb-1x d-block fs">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x fo " >
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
</div>
</div>
</div>
                </div>
            </div>
        </>
    );
};

export default Theme;
