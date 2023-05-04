import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useContext } from "react";
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
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
   
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userLoginData.email || !userLoginData.password) {
      return alert("Form not complete");
    }
    const {email, password} = userLoginData;
    userlogin(email, password)
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserLoginData((prevState) => ({
      // loads the preState items.
      ...prevState,
      // the name is taken into an array and the value is assigned.
      [name]: value,
    }));
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
                value={userLoginData.email}
                onChange={handleInput}
              />
              <Label className="mt-2">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={userLoginData.password}
                onChange={handleInput}
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
