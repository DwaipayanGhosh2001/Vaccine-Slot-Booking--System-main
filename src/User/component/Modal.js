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
  ModalFooter,
  Input,
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
  const { click } = useUserAuth();
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
              <Col md={6} xs={6}>
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
  const { user, showvaccine, bookdetails, setBookDetails } = useUserAuth();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [cancel, setCancel] = useState([]);

  const toggle = () => setModal(!modal);

  const handleopen = () => {
    toggle();
    const uid = user.uid;
    showvaccine(uid);
  };
  const discard = (id) => {
    const find = cancel.find((item) => item === id);
    if (find !== id) {
      setCancel([...cancel, id]);
    } else {
      const filter = cancel.filter((item) => item !== id);
      setCancel(filter);
    }
  };

  const remove = () => {
    const elements = bookdetails.filter(
      (item, index) => !cancel.includes(index)
    );
    setBookDetails(elements);
    setCancel([]);
    setCheckbox(false);
  };

  // console.log(bookdetails)
  return (
    <div>
      {user ? (
        <>
          <p className="text-white px-md-4 px-1 mb-0 zoom" onClick={handleopen}>
            Appointment
          </p>
          <Modal isOpen={modal} centered size="xl">
            <ModalHeader
              className="mx-auto border-0 pb-0"
              toggle={() => {
                toggle();
                setCheckbox(false);
                setCancel([]);
              }}
            >
              <h3 className="text-color"> Vaccine Booking Status</h3>
            </ModalHeader>

            <ModalBody className="border-top">
              {bookdetails.length === 0 ? (
                <div>
                  <h6 className="fw-bold fs-5 ms-4">
                    {" "}
                    No Vaccine Slot Is Booked.
                  </h6>
                </div>
              ) : (
                <>
                  <Table className="table">
                    <thead>
                      <tr className="text-center">
                        {checkbox && <th>Select</th>}
                        <th>Sl.No</th>
                        <th>Vaccine Center</th>
                        <th>Vaccine</th>
                        <th className="d-none d-md-block">Type</th>
                        <th>Booking Date</th>
                        <th>Approved Date</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {bookdetails.map((item, index) => (
                        <tr key={index}>
                          {checkbox && (
                            <Input
                              type="checkbox"
                              onChange={() => discard(index)}
                            />
                          )}
                          <th scope="row"> {index + 1}</th>
                          <td>{item.centre_name}</td>
                          <td>{item.vaccine}</td>
                          <td className="d-none d-md-block">
                            {item.paid ? "Paid" : "Free"}
                          </td>
                          {item && (
                            <td>{item.booking_date.substring(0, 10)}</td>
                          )}

                          <td
                            className={`fw-bold ${
                              item.approved === null
                                ? "text-uppercase text-secondary"
                                : item.approved === true
                                ? `text-success`
                                : `text-danger text-uppercase`
                            }`}
                          >
                            {item.approved === null
                              ? "Pending"
                              : item.approved === true
                              ? item.allotted_date
                              : "Denied"}
                          </td>
                          {/* <td className="d-none d-md-block">
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
                          </td>  */}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <p className="text-danger mb-0">
                    * Please reach the vaccine center on the Approved Date for
                    your scheduled vaccination.
                  </p>
                </>
              )}
            </ModalBody>
            {bookdetails.length !== 0 && 
            (
<ModalFooter className="border-0 pt-0">
              {cancel.length !== 0 && (
                <Button className="" color="danger" onClick={remove}>
                  Confirm
                </Button>
              )}

              <Button
                className="float-end rounded"
                outline
                color="danger"
                disabled={cancel.length !== 0}
                onClick={() => setCheckbox(!checkbox)}
              >
                Cancel Booking
              </Button>
            </ModalFooter>
            )
            }
            
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
        Book
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
