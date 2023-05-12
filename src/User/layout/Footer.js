import React from "react";
import { Container } from "reactstrap";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { useUserAuth } from "../context/Context";
const Footer = () => {
  const {change} = useUserAuth();
  return (
    <>
    {change !== true && 
     <Container fluid className=" color py-2 text-white d-sm-flex justify-content-between py-3">

     <div className="w-25 mx-auto my-auto text-center text-sm-center faq">
       <h6>About</h6>
       <p className="mb-0" style={{ fontSize: "12px" }}>
       The Vaccine Slot System project is a software application designed
            to facilitate the process of finding and booking available slots for
            COVID-19 vaccinations.
       </p>
     </div>
     <div className="my-auto mx-auto d-none d-md-block">@End sem Project</div>
     <div className=" my-auto me-sm-5 text-center text-sm-center">
       <p className="m-2"> Contact us on: </p>
       <BsFacebook className="fs-6 me-3 zoom" />
       <BsInstagram className="fs-6 mx-3 zoom" />
       <BsGithub className="fs-6 mx-3 zoom" />
     </div>
   </Container>
    }
    </>
  );
};
export default Footer;
