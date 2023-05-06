import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const About = () => {
  return (
    <div className="bg-about">
      <div className="ms-md-auto w-50 text-dark about">
        <h1 className=" pt-5 fw-bold  w-75 ms-md-auto fst-italic about" style={{fontFamily: "sans-serif"}}>About</h1>
        <h3 className=" mt-3 fs-5 w-75 ms-md-auto animate__fadeInLeft animate__animated animate__delay-1s	1s about">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            numquam eligendi cumque sequi nihil nobis obcaecati fuga facilis ad
            quas ea quis voluptatibus animi facere dicta molestias, delectus quo
            earum ab non explicabo libero aliquid? Eaque explicabo excepturi
            beatae non corrupti. Eos, dolores? Ipsam pariatur maxime voluptatem
            aperiam nostrum ratione reiciendis, voluptate doloremque.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            cum et maiores quis sequi perferendis nemo omnis facilis assumenda
            dolores?
          </i>
        </h3>
      </div>
    </div>
  );
};
export default About;
