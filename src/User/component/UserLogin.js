import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useContext, useRef } from "react";
import {
  Card,
  CardBody,
  Container,
  Input,
  Label,
  Form,
  CardFooter,
  Button,
} from "reactstrap";
import { useUserAuth } from "../context/Context";


const Userlogin = () => {
 const {userlogin} = useUserAuth();

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email= emailRef.current.value;
    const password= passRef.current.value;
    if (!email || !password) {
      return alert("Form not complete");
    }
    userlogin(email, password)
  };


  return (
    <div>
        <Card className="border-0 mt-2 mb-0">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
                innerRef={emailRef}
              />
              <Label className="mt-2">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                innerRef={passRef}
              />
              <CardFooter className="mt-3 d-flex justify-content-center w-100 border-0">
                <Button
                  type="submit"
                  className=" rounded-pill px-5 w-50 text-success zoom"
                  color="success"
                  outline
                  style={{ backgroundColor: (hover = "transparent") }}
                >
                  Login
                </Button>
              </CardFooter>
            </Form>
          </CardBody>
        </Card>
    </div>
  );
};
export default Userlogin;
