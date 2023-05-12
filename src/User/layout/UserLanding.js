import React from "react";
import Faqsection from "./Faq";
import { Card, CardBody, Container } from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
const UserLanding = () => {
  return (
    <Container fluid className="mb-5 px-0">
      <>
        <Card style={{ width: "100%", maxHeight: "650px" }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded w-100"
          >
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img
                  className="w-100 image"
                  src="https://static.toiimg.com/photo/resizemode-75,overlay-toiplus,msid-86445723/86445723.jpg"
                  alt=""
                />
                <motion.Card
                  className=" position-absolute w-50 mt-5 "
                  style={{
                    top: 0,
                    left: 0,
                    textShadow: "2px 1px 1px black",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h3 className="ms-5  text-white w-75 fw-bold text-size">
                    Vaccines and antibiotics have made many infectious diseases
                    a thing of the past; we've come to expect that public health
                    and modern science can conquer all microbes. But nature is a
                    formidable adversary.
                  </h3>
                </motion.Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img
                  className="w-100 image"
                  src="https://www.indiaspend.com/h-upload/2021/03/08/434868-covid-19-vaccination-data-india.jpg"
                  alt=""
                />
                <motion.Card
                  className=" position-absolute w-50 "
                  style={{
                    top: 20,
                    left: 0,
                    textShadow: "2px 1px 1px black",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                 
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h4 className={` ms-5 text-white w-100  fw-bold text-size `}>
                    Without equity, pandemic battles will fail. Viruses will
                    simply recirculate, and perhaps undergo mutations or changes
                    that render vaccines useless, passing through the
                    unprotected populations of the planet.
                  </h4>
                </motion.Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img
                  className="w-100 image"
                  src="https://images.theconversation.com/files/373552/original/file-20201208-13-17kqqxa.jpg?ixlib=rb-1.1.0&rect=0%2C327%2C3528%2C1764&q=45&auto=format&w=1356&h=668&fit=crop"
                  alt=""
                />
                <motion.Card className=" position-absolute w-50"
                style={{
                  top: "40%",
                  left: "45%",
                  textShadow: "2px 1px 1px black",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                >
                <h3
                  className="  text-white fw-bold w-50 float-end  text-size"
                  
                >
                  It's important for children to be vaccinated so that they have the opportunity to become adults.
                </h3>
                  </motion.Card>
               
              </div>
            </SwiperSlide>
          </Swiper>
        </Card>
      </>
      <div>
        <Card className="bg-image mt-5 shadow-lg p-3 mb-5 bg-body rounded  border-0 py-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <CardBody className=" w-75 overlay text-white text-center me-auto px-2">
              <h3 className="text-uppercase fw-bold mt-3  ">Vaccine</h3>
              <p className="fs-8 mt-2">
                {" "}
                <i>
                  {" "}
                  A vaccine is a biological preparation that provides active
                  acquired immunity to a particular infectious or malignant
                  disease. The safety and effectiveness of vaccines has been
                  widely studied and verified. A vaccine typically contains an
                  agent that resembles a disease-causing microorganism and is
                  often made from weakened or killed forms of the microbe, its
                  toxins, or one of its surface proteins. The agent stimulates
                  the body's immune system to recognize the agent as a threat,
                  destroy it, and to further recognize and destroy any of the
                  microorganisms associated with that agent that it may
                  encounter in the future.
                </i>
              </p>
            </CardBody>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <CardBody className=" w-75 overlay text-white text-center ms-auto mt-5 px-2">
              <h3 className="text-uppercase  mt-3  ">Effects</h3>
              <p className=" fs-8 mt-2">
                {" "}
                <i>
                  {" "}
                  There is overwhelming scientific consensus that vaccines are a
                  very safe and effective way to fight and eradicate infectious
                  diseases. The immune system recognizes vaccine agents as
                  foreign, destroys them, and "remembers" them. When the
                  virulent version of an agent is encountered, the body
                  recognizes the protein coat on the agent, and thus is prepared
                  to respond, by first neutralizing the target agent before it
                  can enter cells, and secondly by recognizing and destroying
                  infected cells before that agent can multiply to vast numbers.
                </i>
              </p>
            </CardBody>
          </motion.div>
        </Card>
      </div>
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className="text-center text-color mt-5">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-dark p-0 mt-3 ">
          {" "}
          Here are some frequently asked querries
        </p>
        <Faqsection
          count={1}
          question={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum ?"
          }
          answer={"Lorem ipsum dolor sit amet consectetur"}
        />
        <Faqsection
          count={2}
          question={" Lorem ipsum dolor sit amet consectetur ? "}
          answer={
            "Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis deleniti ut."
          }
        />
        <Faqsection
          count={3}
          question={" Lorem ipsum dolor sit amet consectetur rekd fhele? "}
          answer={
            "Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis deleniti ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, und."
          }
        />
      </motion.div>
    </Container>
  );
};
export default UserLanding;
