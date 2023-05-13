import React, {useRef, useState} from "react";
import { hover } from "@testing-library/user-event/dist/hover";
import { Button, Container, Form, Input, Label } from "reactstrap";
import { useUserAuth } from "../context/Context";

const BookVaccine = ({ details }) => {
  const { user, bookvaccine } = useUserAuth();
  const [check, setCheck] = useState(false);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

const vacRef= useRef();

const handleSubmit = async (e) => {
e.preventDefault();
const centerid= details._id;
const uid = user.uid;
const vaccine= vacRef.current.value;
const find = details.vaccines.filter((item) => item.name === vaccine)
const paid = find[0].paid;
bookvaccine(vaccine, paid, centerid, uid)
await delay(4000);
setCheck(!check);
}
  const available = details.vaccines.filter((item) => item.stock > 0);

 
  return (
    <Container className="border-top ">
      <Form onSubmit={handleSubmit}>
        <Label className="mt-3">Name</Label>
        <Input type="text" name="name" value={user.name} disabled/>
        <Label className="mt-3">Email</Label>
        <Input type="text" name="name" value={user.email} disabled/>
        <Label className="mt-3">Phone Number</Label>
        <Input type="text" name="name" value={user.phone} disabled/>
        <Label className="mt-3">Select Vaacine</Label>
        <Input type="select" name="Vaccine" innerRef={vacRef}>
          {available.map((item, index) => (
            <option key={index}>{item.name} </option>
          ))}
        </Input>
        <div className="d-flex justify-content-center mt-4 mb-2">
          <Button
            type="submit"
            className=" rounded-pill px-5 w-50 text-success zoom "
            color="success"
            outline
            style={{ backgroundColor: (hover = "transparent") }}
            onClick={() => setCheck(!check)}
          >
           {check  ? (
                  <div className="spinner-border spinner-border-sm" role="status">
                  </div>
                ) : (
                  `Book Slot`
                )}
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default BookVaccine;
