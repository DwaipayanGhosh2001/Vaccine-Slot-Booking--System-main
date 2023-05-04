import React, { useState } from "react";
import { Container, FormGroup, Label, Input, Form, Row, Col } from "reactstrap";
import { states } from "../../states";
import { toast } from "react-toastify";
import { useUserAuth } from "../context/Context";

import axios from "axios";
import {DistrictVaccine, PinVaccine} from "./DisplayVaccine";
const Searchdistrict = () => {
  const {user} = useUserAuth();
//   const [state, setState] = useState("Select State");
// const [district, setDistrict] = useState("Select District");
const [search, setSearch] = useState({
  state: "Select State",
    district: "Select District",
})
const handleInput = (e) => {
  const { name, value } = e.target;
  if (!user) {
    return toast("Please Log-In first", {type:"error"})
  }
  setSearch((prevState) => ({
    // loads the preState items.
    ...prevState,
    // the name is taken into an array and the value is assigned.
    [name]: value,
  }));
};
  return (
    <Container fluid>
      <div>
        <Form className="mt-3">
          <Row className="w-100 mx-auto">
            <Col md={3} sm={1}></Col>
            <Col md={3} sm={5}>
              <FormGroup>
                <Label className="mt-2 ms-2">State</Label>

                <Input
                  name="state"
                  type="select"
                  placeholder="Enter state"
                  className="rounded-pill "
                  value={search.state}
                  onChange={handleInput}
                >
                  {states.map((item, index) => (
                    <option key={index}>{item.state}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} sm={5}>
              <FormGroup>
                <Label className="mt-2 ms-2">District</Label>
                <Input
                  name="district"
                  type="select"
                  placeholder="Enter district"
                  className="rounded-pill "
                  value={search.district}
                  onChange={handleInput}
                >
                  {states[
                    states.findIndex((item) => item.state === search.state)
                  ].districts.map((dis, index) => (
                    <option key={index}>{dis}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <DistrictVaccine district={search.district}/>
      </div>
    </Container>
  );
};

const Searchpin = () => {
  const {user}= useUserAuth();
  const [pin, setPin] = useState({
    pincode:""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
if (!user) {
  return toast("Please Log-In first", {type:"error"})
}
    setPin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container fluid className="">
      <Form className="w-50 mx-auto mt-5">
        <Input
          type="number"
          name="pincode"
          className="w-50 mx-auto rounded-pill mb-4"
          placeholder="Enter your postal code"
          value={pin.pincode}
          onChange={handleInput}
        />
      </Form>
      {pin.pincode > 99999 && pin.pincode < 1000000 && <PinVaccine pincode={pin.pincode}/> }
      
    </Container>
  );
};
export{Searchdistrict, Searchpin} ;
