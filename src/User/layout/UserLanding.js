import React from "react";
import Faqsection from "./Faq";
import { Container } from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const UserLanding = () => {
  

  return (
    <Container fluid className="mb-5 px-0">
      <>
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
          className="mySwiper rounded w-100 "
          style={{ height: "630px" }}
        >
          <SwiperSlide>
            <div style={{ position: "relative" }}>
              <img
                className="w-100"
                src="https://images.thequint.com/thequint%2F2022-02%2Fa1ff7dc4-fa9a-41f3-b4f7-e4d2503ec2a5%2Fthequint_2021_07_17b3e096_7426_48c2_be39_0945663fa5a1_iStock_1291344002__2_.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200"
                alt="your-image-alt-text"
              />
              <h3
                className="  ms-5 d-flex justify-content-start position-absolute text-white w-100 h-100 fw-bold animate__animated animate__fadeInLeft "
                style={{
                  top: 100,
                  left: 0,
                  textShadow: "2px 1px 1px black",
                }}
              >
                Lorem ipsum dolor sit amet.
                <br />
                consectetur adipisicing elit. Quis, distinctio!
                <br />
                Lorem ipsum dolor, sit amet!
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: "relative" }}>
              <img
                className="w-100"
                src="https://www.indiaspend.com/h-upload/2021/03/08/434868-covid-19-vaccination-data-india.jpg"
                alt="your-image-alt-text"
              />
              <h4
                className={` ms-5 d-flex justify-content-start position-absolute text-white w-100 h-100 fw-bold animate__animated animate__fadeInDown animate__delay-5s	5s`}
                style={{
                  top: 20,
                  left: 0,
                  textShadow: "2px 1px 1px black",
                }}
              >
                Lorem ipsum dolor sit amet.
                <br />
                consectetur adipisicing elit. Quis, distinctio!
                <br />
                Lorem ipsum dolor, sit amet!
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ position: "relative" }}>
              <img
                className="w-100"
                src="https://images.theconversation.com/files/373552/original/file-20201208-13-17kqqxa.jpg?ixlib=rb-1.1.0&rect=0%2C327%2C3528%2C1764&q=45&auto=format&w=1356&h=668&fit=crop"
                alt="your-image-alt-text"
              />
              <h3
                className=" d-flex justify-content-end align-items-center position-absolute text-white fw-bold w-100 h-100 animate__fadeInRight animate__animated animate__delay-5s	5s"
                style={{
                  top: 120,
                  left: -30,
                  textShadow: "2px 1px 1px black",
                }}
              >
                Lorem ipsum dolor sit amet.
                <br />
                consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor, sit amet!
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      <div className="">
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
      </div>
    </Container>
  );
};
export default UserLanding;
