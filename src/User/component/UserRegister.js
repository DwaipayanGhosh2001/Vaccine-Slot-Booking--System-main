import React, { useState } from "react";
import { useUserAuth } from "../context/Context";

import { Label, Input, Form, Button, Card, CardBody } from "reactstrap";
import { hover } from "@testing-library/user-event/dist/hover";
const UserRegister = () => {
  const { register } = useUserAuth();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userdata.phone || !userdata.email || !userdata.password) {
      return alert("Form not complete");
    }
    const { name, email, phone, address, password } = userdata;
    register(name, email, phone, address, password);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      // loads the preState items.
      ...prevState,
      // the name is taken into an array and the value is assigned.
      [name]: value,
    }));
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
              defaultValue="John"
              placeholder="Enter your name"
              value={userdata.name}
              onChange={handleInput}
            />
            <Label className="mt-2">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userdata.email}
              onChange={handleInput}
            />
            <Label className="mt-2">Mobile Number</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Enter your mobile number"
              value={userdata.phone}
              onChange={handleInput}
            />

            <Label className="mt-2">Address</Label>
            <Input
              type="text-area"
              name="address"
              placeholder="Enter your address"
              value={userdata.address}
              onChange={handleInput}
            />

            <Label className="mt-2">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={userdata.password}
              onChange={handleInput}
            />
            <div className="w-100 d-flex justify-content-center">
              <Button
                type="submit"
                className=" rounded-pill mt-4 w-50 text-success zoom"
                outline
                color="success"
                style={{ backgroundColor: (hover = "transparent") }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default UserRegister;
