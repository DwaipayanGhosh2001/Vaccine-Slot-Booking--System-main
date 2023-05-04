import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Card, CardBody, Container, Input, Label, Form, CardFooter, Button } from "reactstrap";
const VaccineCenterlogin = ({toggle}) =>
{
    const[vaccinectrData, setvaccinecteData] = useState({
        email: "",
        password:""
    })

    const handleSubmit= (e) => {
        e.preventDefault();
        if ( !vaccinectrData.email || !vaccinectrData.password) {
            return alert("Form not complete");
          }
    }
    
    const handleInput = (e) => {
       
        const {name, value}= e.target;
        setvaccinecteData((prevState) => ({
            // loads the preState items.
          ...prevState,
          // the name is taken into an array and the value is assigned.
          [name]: value,
        }));
    }
return(
    <div>
               <Card className="border-0 mt-2 mb-0">
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <Label>Email</Label>
                        <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={vaccinectrData.email}
                        onChange={handleInput}
                        />
                        <Label className="mt-2">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={vaccinectrData.password}
                        onChange={handleInput}
                        />
                        <CardFooter className="mt-3  border-0"  >
                            <Button type="submit" className="float-end rounded-pill px-5 text-success zoom"
                            color= "success" outline style={{backgroundColor:hover= "transparent"}}
                            >Login</Button>
                            <Button style={{backgroundColor: "rgb(16,163,177)"}} className="float-start rounded-pill px-5 text-white border-0 zoom" outline>
                                Register
                            </Button>
                        </CardFooter>
                    </Form>
                </CardBody>
               </Card>        
        </div>
)
}
export default VaccineCenterlogin;