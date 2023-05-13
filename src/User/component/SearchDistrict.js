import React, { useState, useEffect } from "react";
import { Container, FormGroup, Label, Input, Form, Row, Col } from "reactstrap";
import { states } from "../../states";
import { toast } from "react-toastify";
import { useUserAuth } from "../context/Context";

import { DistrictVaccine, PinVaccine } from "./DisplayVaccine";
const Searchdistrict = () => {
  const { user } = useUserAuth();
  const [state, setState] = useState("Select State");
  const [district, setDistrict] = useState("Select District");

  console.log(state, district);

  useEffect(() => {
    // Get the districts for the selected state
    const selectedState = states.find((item) => item.state === state);
    if (selectedState) {
      // Set the first district as the default value
      setDistrict(selectedState.districts[0]);
    }
  }, [state]);

  return (
    <Container fluid>
      <div>
        {district === "Select District" && (
          <p
            className="d-flex justify-content-center fst-italic my-4"
            style={{ color: "GrayText" }}
          >
            {" "}
            <b className="me-2">Example- </b>State: West Bengal and District:
            Jalpaiguri
          </p>
        )}
      </div>

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
                  value={state}
                  onChange={(e) =>
                    user
                      ? setState(e.target.value)
                      : toast("Please Log-In first", { type: "error" })
                  }
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
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  {states[
                    states.findIndex((item) => item.state === state)
                  ].districts.map((dis, index) => (
                    <option key={index}>{dis}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <DistrictVaccine district={district} />
      </div>
    </Container>
  );
};

const Searchpin = () => {
  const { user } = useUserAuth();
  const [pin, setPin] = useState({
    pincode: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (!user) {
      return toast("Please Log-In first", { type: "error" });
    }
    setPin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container fluid>
      <div>
        {pin.pincode === "" && (
          <p
            className="d-flex justify-content-center fst-italic my-4"
            style={{ color: "GrayText" }}
          >
            {" "}
            <b className="me-2">Example- </b>Pincode: 111111
          </p>
        )}
      </div>
      <Form className="w-50 mx-auto mt-5 faq">
        <Input
          type="number"
          name="pincode"
          className="w-50 mx-auto rounded-pill mb-4 pin"
          placeholder="Enter your postal code"
          value={pin.pincode}
          onChange={handleInput}
        />
      </Form>
      {pin.pincode > 99999 && pin.pincode < 1000000 ? (
        <PinVaccine pincode={pin.pincode} />
      ) : (
        <>
          { pin.pincode > 1000000 && (
            <h3 className="text-center text-danger">Invalid Input</h3>
          )}
        </>
      )}
    </Container>
  );
};
export { Searchdistrict, Searchpin };
