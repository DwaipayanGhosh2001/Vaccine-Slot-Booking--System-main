import { Container } from "@mui/material";
import React, { useState, useContext } from "react";
import {  VaccineContext } from "../context/Context";
import { states } from "../../states";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Label,
  Input,
  Form,
  Button,
  Card,
  CardBody,
  InputGroup,
} from "reactstrap";
import { toast } from "react-toastify";
import { hover } from "@testing-library/user-event/dist/hover";
const VacRegister = () => {
  const navigate = useNavigate();
  const vaccontext = useContext(VaccineContext);
  const [vaccinedata, setVaccineData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "Select State",
    district: "Select District",
    address: "",
    pincode: "",
    password: "",
  });
  const vacsignup = () => {
    // Test if vaccine center ata is passing to the context

    //     context.setVaccineCenter({name: vaccinedata.name, email: vaccinedata.email, state: vaccinedata.state, district: vaccinedata.district})
    // console.log(context.vaccineCenter)

    const { name, email, phone, state, district, address, pincode, password } =
      vaccinedata;

    axios
      .post(
        "https://vaccine-slot-booking-system-backend.vercel.app/register-vaccination-centre",
        {
          centre_name: name,
          email: email,
          phone: phone,
          state: state,
          district: district,
          address: address,
          pin_code: pincode,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res)
        const { data } = res;
        console.log(data);
        vaccontext.setVaccineCenter({
          uid: data._id,
          centre_name: data.centre_name,
          email: data.email,
          phone: data.phone,
          state: data.state,
          district: data.district,
          address: data.address,
          pin_code: data.pin_code,
        });
console.log(vaccontext.vaccineCenter)
        // navigate("/")
        toast("Registration Successful", { type: "success" });
       
      })
      .catch((error) => {
        console.log(error);
        toast("Email/phone number alread registered", { type: "error" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vaccinedata.phone || !vaccinedata.email || !vaccinedata.password) {
      return alert("Form not complete");
    }
    vacsignup();
    
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setVaccineData((prevState) => ({
      // loads the preState items.
      ...prevState,
      // the name is taken into an array and the value is assigned.
      [name]: value,
    }));
  };
  return (
    <div>
      {vaccontext.vaccineCenter?.uid ? (
        // navigate("/about")
        <div>{console.log(vaccontext.vaccineCenter?.uid)}</div>
        
      ) : (
        <>
          <Card className="border-0 mt-2 mb-0">
            <CardBody className="pt-0">
              <Form onSubmit={handleSubmit}>
                <Label className="">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter the Vaccine Center"
                  value={vaccinedata.name}
                  onChange={handleInput}
                />
                <Label className="mt-2">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={vaccinedata.email}
                  onChange={handleInput}
                />
                <Label className="mt-2">Mobile Number</Label>
                <Input
                  type="number"
                  name="phone"
                  placeholder="Enter mobile number"
                  value={vaccinedata.phone}
                  onChange={handleInput}
                />

                <Label className="mt-2">State</Label>

                <Input
                  name="state"
                  type="select"
                  placeholder="Enter state"
                  value={vaccinedata.state}
                  onChange={handleInput}
                >
                  {states.map((item, index) => (
                    <option key={index}>{item.state}</option>
                  ))}
                </Input>
                <Label className="mt-2">District</Label>
                <Input
                  name="district"
                  type="select"
                  placeholder="Enter district"
                  value={vaccinedata.district}
                  onChange={handleInput}
                >
                  {states[
                    states.findIndex((item) => item.state === vaccinedata.state)
                  ].districts.map((dis, index) => (
                    <option key={index}>{dis}</option>
                  ))}
                </Input>

                <Label className="mt-2">Address</Label>
                <Input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={vaccinedata.address}
                  onChange={handleInput}
                />
                <Label className="mt-2">Pincode</Label>
                <Input
                  type="number"
                  name="pincode"
                  placeholder="Enter your postal code"
                  value={vaccinedata.pincode}
                  onChange={handleInput}
                />

                <Label className="mt-2">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={vaccinedata.password}
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
        </>
      )}
    </div>
  );
};
export default VacRegister;
