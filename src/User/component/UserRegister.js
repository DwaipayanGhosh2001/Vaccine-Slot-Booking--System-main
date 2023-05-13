import React, { useState, useRef } from "react";
import { useUserAuth } from "../context/Context";

import { Label, Input, Form, Button, Card, CardBody } from "reactstrap";
import { hover } from "@testing-library/user-event/dist/hover";
const UserRegister = () => {
  const { register } = useUserAuth();
  const [check, setCheck] = useState(false);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

const nameRef= useRef(null);
const emailRef= useRef(null);
const phoneRef= useRef(null);
const addressRef= useRef(null);
const passRef= useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name= nameRef.current.value;
    const email= emailRef.current.value;
    const phone= phoneRef.current.value;
    const address= addressRef.current.value;
    const password= passRef.current.value;
    if (!phone || !email || !password) {
      return alert("Form not complete");
    }
    register(name, email, phone, address, password);
    await delay(4000);
    setCheck(!check);
  };
  return (
    <div>
      <Card className="border-0 mt-2 mb-0">
        <CardBody className="pt-0">
          <Form onSubmit={handleSubmit}>
            <Label className="">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              innerRef={nameRef}
            />
            <Label className="mt-2">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              innerRef={emailRef}
            />
            <Label className="mt-2">Mobile Number</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Enter your mobile number"
              innerRef={phoneRef}
            />

            <Label className="mt-2">Address</Label>
            <Input
              type="text-area"
              name="address"
              placeholder="Enter your address"
              innerRef={addressRef}
            />

            <Label className="mt-2">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              innerRef={passRef}
            />
            <div className="w-100 d-flex justify-content-center">
              <Button
                type="submit"
                className=" rounded-pill mt-4 w-50 text-success zoom"
                outline
                color="success"
                style={{ backgroundColor: (hover = "transparent") }}
                onClick={() => setCheck(!check)}
              >
                {check ? (
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  `Submit`
                )}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default UserRegister;
