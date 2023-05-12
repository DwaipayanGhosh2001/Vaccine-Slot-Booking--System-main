import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { BookSlot } from "./Modal";

const Cardelement = ({ details }) => {
  return (
    <>
    <div className="d-flex justify-content-center mt-3">
      <p className="px-5 py-1 text-white text-uppercase rounded bg-paid mb-0 mx-5">Paid</p>
      <p className="px-5 py-1 text-dark text-uppercase rounded bg-free mb-0 mx-5">Free</p>
      </div>
      <Container className="m-5 w-100 mx-auto">
        <ListGroup>
          {details.map((item, index) => (
            <div key={index}>
              {item.vaccines.length === 0 ? (
                <ListGroupItem
                  style={{ backgroundColor: "#FAD3C8" }}
                  className="d-flex justify-content-between mb-3 shadow p-3 mb-5  rounded"
                >
                  <div className="my-auto ">
                    <p className="fw-bold fs-6 mb-1 ms-1 text-uppercase">{item.centre_name}</p>
                    <p className="mb-0 ms-1">{item.address}</p>
                    <div>
                      <>
                        <div className="d-flex">
                          <p className="text-dark mt-1 mx-1 mb-0">
                            No vaccine available currently
                          </p>
                        </div>
                      </>
                    </div>
                  </div>
                  <div className="my-auto ">
                    <Button
                      className=" text-white rounded px-3 me-3 zoom"
                      color="secondary"
                      disabled
                    >
                      Book 
                    </Button>
                  </div>
                </ListGroupItem>
              ) : (
                <>
                  <ListGroupItem
                    style={{ backgroundColor: "#D2FADB" }}
                    className="d-flex justify-content-between mb-3 shadow p-3 mb-5  rounded"
                  >
                    <div className="my-auto ">
                      <p className="fw-bold fs-6 mb-1 ms-1 text-uppercase">
                        {item.centre_name}
                      </p>
                      <p className="mb-0 ms-1">{item.address}</p>
                      <div>
                        <div className="d-flex flex-wrap w-75 faq ">
                          {item.vaccines.map((vaccine, index) => (
                            <div key={index}>
                              {vaccine.stock > 0 && (
                                <div>
                                  {vaccine.paid ? (
                                    <p className="text-white mt-2 mx-2 mb-0 text-capitalize text-center bg-paid px-3  rounded">
                                      {`${vaccine.name} (${vaccine.stock})`} 
                                    </p>
                                  ) : (
                                    <>
                                      <p className="text-dark mt-2 mx-2 mb-0 text-capitalize text-center bg-free px-3 rounded">
                                      {`${vaccine.name} (${vaccine.stock})`}
                                      </p>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="my-auto">
                      <BookSlot details={item} />
                    </div>
                  </ListGroupItem>
                </>
              )}
            </div>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};
export default Cardelement;
