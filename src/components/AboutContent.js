import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from '../assets/react1.jpg';
import React2 from '../assets/react2.webp';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          As a fullstack developer, I possess a versatile set of skills and
          expertise in both front-end and back-end development. I have
          experience in designing and implementing scalable, responsive, and
          user-friendly web applications that meet the needs of clients and
          users.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="React1" />
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="React2" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
