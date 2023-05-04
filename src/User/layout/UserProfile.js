import React, { useContext, useState } from "react";
import {
  CardHeader,
  Container,
  Card,
  CardBody,
  Label,
  Button,
  Input,
  Form,
} from "reactstrap";
import { hover } from "@testing-library/user-event/dist/hover";
import { UserContext, useUserAuth } from "../context/Context";
const UserProfile = () => {
  const {user} = useUserAuth();

  const [active, setActive] = useState(true);

  const toggle = () => setActive(!active);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(context.user)
//   };

//   const buttonClick = () => {
//     handleSubmit();
    
//   }
  const handleInput = (e) => {
    const { name, value } = e.target;
    // context.setUser((prevState) => ({
    //   // loads the preState items.
    //   ...prevState,
    //   // the name is taken into an array and the value is assigned.
    //   [name]: value,
    // }));
  };
  return (
    <Container fluid="md" className="d-flex justify-content-center mt-5">
      <Card className="w-50 shadow p-3 mb-4 bg-body rounded mt-2 pb-0">
        <CardHeader
          className="text-center text-color "
          style={{ backgroundColor: "transparent" }}
        >
          <h4 className="text-uppercase">Your Profile</h4>
        </CardHeader>
        <CardBody>
          <Form>
            <Label className="">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              disabled={active}
              value={user.name}
              onChange={handleInput}
            />
            <Label className="mt-2">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              disabled={active}
              value={user.email}
              onChange={handleInput}
            />
            <Label className="mt-2">Mobile Number</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Enter your mobile number"
              disabled={active}
              value={user.phone}
              onChange={handleInput}
            />

            <Label className="mt-2">Address</Label>
            <Input
              type="text-area"
              name="address"
              placeholder="Enter your address"
              disabled={active}
              value={user.address}
              onChange={handleInput}
            />
            {active ? (
              <div className="w-100 d-flex justify-content-center">
                <Button
                  type="submit"
                  className=" rounded-pill mt-4 w-50 text-info zoom"
                  outline
                  color="info"
                  style={{ backgroundColor: (hover = "transparent") }}
                  onClick={toggle}
                >
                  Update
                </Button>
              </div>
            ) : (
              <>
                <div className="w-100 d-flex justify-content-center">
                  <Button
                    type="submit"
                    className=" rounded-pill mt-4 w-50 text-success zoom"
                    outline
                    color="success"
                    style={{ backgroundColor: (hover = "transparent") }}
                    onClick={toggle}
                  >
                    Save
                  </Button>
                </div>
              </>
            )}
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};
export default UserProfile;
