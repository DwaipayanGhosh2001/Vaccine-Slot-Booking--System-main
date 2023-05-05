import React, { useContext, useState, useRef } from "react";
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
import {  useUserAuth } from "../context/Context";
const UserProfile = () => {
  const { user } = useUserAuth();

  const nameRef= useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addRef = useRef(null);

  const [active, setActive] = useState(true);

  const toggle = () => setActive(!active);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(context.user)
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
toggle();
console.log(nameRef.current.value);
console.log(emailRef.current.value);
console.log(phoneRef.current.value);
console.log(addRef.current.value);
  }

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
           <Form onSubmit={handleSubmit}>
              <Label className="">Name</Label>
             <Input
               type="text"
               name="name"
               placeholder="Enter your name"
               disabled={active}
               defaultValue={user.name}
               innerRef={nameRef}
             />
            <Label className="mt-2">Email</Label>
             <Input
               type="email"
               name="email"
               placeholder="Enter your email"
               disabled={active}
               defaultValue={user.email}
               innerRef={emailRef}
             />
             <Label className="mt-2">Mobile Number</Label>
             <Input
               type="number"
               name="phone"
               placeholder="Enter your mobile number"
               disabled={active}
               defaultValue={user.phone}
               innerRef={phoneRef}
             />
 
             <Label className="mt-2">Address</Label>
             <Input
               type="text-area"
               name="address"
               placeholder="Enter your address"
               disabled={active}
               defaultValue={user.address}
               innerRef={addRef}
             />
           <div className="w-100 d-flex justify-content-center">
               <Button
                 type="submit"
                 className={` rounded-pill mt-4 w-50  zoom text-uppercase ${active ? 'text-info': 'text-success'}`}
                 outline
                 color={active ? `info`:`success`}
                 style={{ backgroundColor: (hover = "transparent") }}
               >
                 {active? `update`: 'success'}
               </Button>
             </div>
           </Form>
          
         </CardBody>
       </Card>
     </Container>
  );
};
export default UserProfile;
