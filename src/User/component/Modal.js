import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  ButtonGroup,
  Table,
} from "reactstrap";
import UserRegister from "./UserRegister";
import Userlogin from "./UserLogin";
import { useUserAuth } from "../context/Context";
import BookVaccine from "./BookVaccine";
const RegsiterModal = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color="light"
        outline
        className="me-md-4 modalbtn"
        style={{ border: "none" }}
        onClick={toggle}
      >
        Register
      </Button>
      <Modal isOpen={modal} centered>
        <ModalHeader
          toggle={toggle}
          className="mx-auto border-0 text-color pb-0"
        >
          Register Now
        </ModalHeader>
        <ModalBody className="pt-0">
          <ButtonGroup className="w-100 border-top pt-3">
            <Row className="w-100 mx-auto">
              <Col md={6} xs={6}>
                <Button
                  className={
                    "w-100 rounded-pill border-3 border-info text-white fw-bold zoom active px-1 px-sm-auto"
                  }
                  outline
                  color="info"
                  style={{ backgroundColor: (hover = "transparent") }}
                >
                  User
                </Button>
              </Col>
              <Col md={6} xs={6}>
                <Button
                  className={
                    "w-100 rounded-pill border-3 border-info text-dark fw-bold zoom px-1 px-sm-auto"
                  }
                  outline
                  color="info"
                  style={{ backgroundColor: (hover = "transparent") }}
                  onClick={() => {
                    navigate("/centre-signup");
                    toggle();
                  }}
                >
                  Vaccine Centre
                </Button>
              </Col>
            </Row>
          </ButtonGroup>
          <UserRegister />
        </ModalBody>
      </Modal>
    </div>
  );
};

const LoginModal = () => {
  const {click} = useUserAuth();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color="light"
        outline
        className="me-md-4 modalbtn"
        style={{ border: "none" }}
        onClick={toggle}
      >
        Login
      </Button>
      <Modal isOpen={modal} centered>
        <ModalHeader
          toggle={toggle}
          className="mx-auto border-0 text-color pb-0"
        >
          Login Now
        </ModalHeader>
        <ModalBody>
          <ButtonGroup className="w-100 border-top pt-3">
            <Row className="w-100 mx-auto">
              <Col md={6}  xs={6}>
                <Button
                  className={
                    "w-100 rounded-pill  border-3 border-info text-light fw-bold zoom active  px-1 px-sm-auto"
                  }
                  outline
                  color="info"
                  style={{ backgroundColor: (hover = "transparent") }}
                >
                  User
                </Button>
              </Col>
              <Col md={6} xs={6}>
                <Button
                  className={
                    "w-100 rounded-pill border-3 border-info text-dark fw-bold zoom px-1 px-sm-auto"
                  }
                  outline
                  color="info"
                  style={{ backgroundColor: (hover = "transparent") }}
                  onClick={() => {
                    navigate("/centre");
                    toggle();
                  }}
                >
                  Vaccine Centre
                </Button>
              </Col>
            </Row>
          </ButtonGroup>
          <Userlogin />
        </ModalBody>
      </Modal>
    </div>
  );
};

const AppointmentModal = () => {
  const { user, showvaccine, bookdetails } = useUserAuth();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
 
  const handleopen = () => {
    toggle();
    const uid = user.uid;
    showvaccine(uid);
    console.log(bookdetails)
  }
  return (
    <div>
      {user ? (
        <>
          <p className="text-white px-md-4 px-1 mb-0 zoom" onClick={handleopen}>
            Appointment
          </p>
          <Modal isOpen={modal} centered size="xl">
            <ModalHeader className="mx-auto border-0  pb-0 " toggle={toggle}>
              <h3 className="text-color"> Vaccine Booking Status</h3>
            </ModalHeader>
            <ModalBody className="border-top">
              {bookdetails.length === 0 ? (
                <div>
                  <h6 className="fw-bold fs-5 ms-4"> No Vaccine Slot Is Booked.</h6>
                </div>
              ) : (
                <>
                  <Table>
                    <thead>
                      <tr className="text-center">
                        <th>Sl.No</th>
                        <th>Vaccine Center</th>
                        <th>Vaccine</th>
                        <th>Type</th>
                        <th>Booking Date</th>
                        <th>Approved Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {bookdetails.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.centre_name}</td>
                          <td>{item.vaccine}</td>
                          <td>{item.paid ? "Paid" : "Free"}</td>
                          <td>{item.booking_date.substring(0,10)}</td>
                          <td>
                            {item.allotted_date === null
                              ? "-"
                              : item.approved === true
                              ? item.allotted_date
                              : "-"}
                          </td>
                          <td>
                            <Button
                              className=" text-white rounded px-2 py=1 me-3 "
                              color={
                                item.approved === null
                                  ? "secondary"
                                  : item.approved === true
                                  ? `success`
                                  : `danger`
                              }
                            >
                              {item.approved === null
                                ? "Pending"
                                : item.approved === true
                                ? `Approved`
                                : `Denied`}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <p className="text-danger mb-0">* Please reach the vaccine center on the Approved Date for your scheduled vaccination.</p>
                </>
              )}
            </ModalBody>
          </Modal>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const BookSlot = ({ details }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        className="btn-color text-white rounded px-3  me-3 zoom"
        onClick={toggle}
      >
        Book Slot
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader
          className=" mx-auto border-0 text-color pb-0"
          toggle={toggle}
        >
          Enter Complete Details
        </ModalHeader>
        <ModalBody>
          <BookVaccine details={details} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export { RegsiterModal, LoginModal, AppointmentModal, BookSlot };
