import React, { useContext } from "react";
import { Button } from "reactstrap";
import { useUserAuth } from "../context/Context";
import { Link } from "react-router-dom";
import about from "../Img/about.jpg"

const About = () => {
  const {click} = useUserAuth();
  return (
    <div className="bg-about" style={{backgroundImage: `url(${about})`}}>
      <div className="ms-md-auto w-50 text-dark about faq mx-auto mx-md-0">
        <h1
          className=" pt-3 fw-bold  w-75 ms-md-auto fst-italic mx-auto mx-md-0"
          style={{ fontFamily: "sans-serif" }}
        >
          About
        </h1>
        <h3 className=" mt-3 fs-5 w-75 ms-md-auto animate__fadeInLeft animate__animated	1s about mx-auto mx-md-0">
          <i className="about-text">
            The Vaccine Slot System project is a software application designed
            to facilitate the process of finding and booking available slots for
            COVID-19 vaccinations. It aims to simplify the vaccination process
            by providing users with real-time information about vaccine
            availability in their desired location. <br /> <br /> The project
            leverages data from various sources, such as government APIs and
            public health databases, to retrieve accurate and up-to-date
            information about vaccine slots. Users can search for available
            slots based on their preferred state and district, and the system
            displays the available slots along with relevant details such as the
            vaccine type, date, and location.
          </i>
        </h3>
      </div>
      <div className="mt-5 mt-lg-2 ms-lg-5 d-flex justify-content-center d-lg-block">
        <Button className="mb-5 devbtn zoom text-uppercase px-3 rounded" onClick={click} tag={Link} to="/devs" outline>
        <span></span>
      <span></span>
      <span></span>
      <span></span>
          Know The Devs
        </Button>
      </div>
    </div>
  );
};
export default About;
