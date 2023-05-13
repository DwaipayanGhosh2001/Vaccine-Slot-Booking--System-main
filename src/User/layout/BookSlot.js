import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Container, Button } from "reactstrap";

import {Searchdistrict, Searchpin} from "../component/SearchDistrict";
const Bookslot = () => {
  const [active, setActive] = useState(1);
  const toggle = (id) => setActive(id);
  return (
    <div style={{backgroundColor:"#F5F5F5", minHeight: "100vh"}}>
       <Container fluid className=" pb-2 bg-slot ">
      <h1 className="text-center text-color pt-5 animate__animated 	animate__bounce animate__slow	3s "

      >
        Search for your nearest Vaccination Center
      </h1>
      <p className="text-center text-dark mt-4">
        Get a preview list of the nearest centers and check availability of
        vaccination slots
      </p>
      <div className="text-center mx-auto w-100 mt-4 ">
        <h3 className="text-color ">Seacrh By: </h3>
        <Button
          className={ `border-0 fs-4 text-secondary zoom mx-sm-5 mt-2 pt-0 ${active === 1 ? `activeText text-uppercase` : ''}`}
          outline
          style={{ backgroundColor: (hover = "transparent") }}
          onClick={() => toggle(1)}
        >
          District
        </Button>
        <Button
          className={ `border-0 fs-4 text-secondary zoom mx-sm-5 mt-2 pt-0 ${active === 1 ? `` : 'activeText text-uppercase'}`}
          outline
          style={{ backgroundColor: (hover = "transparent") }}
          onClick={() => toggle(2)}
        >
          Pin Code
        </Button>
      </div>
      {active === 1 ? (
        <div>
          <Searchdistrict />
        </div>
      ) : (
        <>
          <Searchpin />
        </>
      )}
    </Container>
      </div>
   
  );
};
export default Bookslot;
