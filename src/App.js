import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import 'animate.css/animate.min.css';
import Navvbar from "../src/User/layout/Navbar";
import Footer from "../src/User/layout/Footer";
import { Container } from "reactstrap";
import { UserContextProvider } from "./User/context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import UserLanding from "../src/User/layout/UserLanding";
import Bookslot from "../src/User/layout/BookSlot";
import About from "../src/User/layout/About";
import UserProfile from "../src/User/layout/UserProfile";
import Login from "./center/pages/Login";
import Landing from "./center/pages/Landing";
import Signup from "./center/pages/Signup";
import Bookings from "./center/pages/Bookings";
import CenterAuthPvtRoute from "./center/routes/CenterAuthPvtRoutes";
import { CenterAuthProvider } from "./center/context/CenterAuthProvider";
import { AppointmentModal } from "./User/component/Modal";
import Developers from "./User/layout/Developer";
const App = () => {
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <UserContextProvider>
        <Container fluid className="px-0" style={{ width: "100%" }}>
          <CenterAuthProvider>
            <Routes>
              <Route path="/centre-login" element={<Login />} />
              <Route path="/centre-signup" element={<Signup />} />
              <Route path='/centre' element={
                <CenterAuthPvtRoute>
                  <Landing />
                </CenterAuthPvtRoute>}
              />
              <Route path='/centre-bookings' element={
                <CenterAuthPvtRoute>
                  <Bookings />
                </CenterAuthPvtRoute>}
              />
            </Routes>
          </CenterAuthProvider>
          <Navvbar />
          <Routes>
            <Route path="/" element={<UserLanding />}></Route>
            <Route exact path="/book_slot" element={<Bookslot />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-profile" element={<AppointmentModal />} />
            <Route path="/devs" element={<Developers />} />
          </Routes>
          <Footer />
        </Container>
      </UserContextProvider>
    </div>
  );
};
export default App;
