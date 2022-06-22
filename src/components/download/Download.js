import React, { useEffect } from "react";
import "./Download.css";
import { FaApple} from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []); 
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2 id="title">SERFICON DOWNLOAD</h2>
        <p>
          Our apps would be available for download on all stores.
        </p>
        <IconContext.Provider value={{ size: "20" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;