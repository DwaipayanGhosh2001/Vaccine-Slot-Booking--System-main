import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Container, Button } from "reactstrap";

import {Searchdistrict, Searchpin} from "../component/SearchDistrict";
const Bookslot = () => {
  const [active, setActive] = useState(1);
  const toggle = (id) => setActive(id);
  return (
    <Container fluid className=" pb-2 ">
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
          className={
            active === 1
              ? "border-0 fs-4 text-secondary zoom mx-5  mt-2 pt-0 activeText text-uppercase"
              : "border-0 fs-4 text-secondary zoom mx-5  mt-2 pt-0"
          }
          outline
          style={{ backgroundColor: (hover = "transparent") }}
          onClick={() => toggle(1)}
        >
          District
        </Button>
        <Button
          className={
            active === 1
              ? "border-0 fs-4 text-secondary zoom mx-5  mt-2 pt-0"
              : "border-0 fs-4 text-secondary zoom mx-5  mt-2 pt-0 activeText text-uppercase"
          }
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
  );
};
export default Bookslot;
