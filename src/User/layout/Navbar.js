import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import {
  Appointment,
  AppointmentModal,
  LoginModal,
  RegsiterModal,
} from "../component/Modal";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext, useUserAuth } from "../context/Context";

function Navvbar() {
  const { change } = useUserAuth();
  const naviagte = useNavigate();
  const { user, logout } = useUserAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // console.log(context.user)
  // console.log(vaccontext.vaccineCenter)
  return (
    <div>
      {change !== true && (
        <Navbar expand="md" className="color py-2">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand className="d-none d-md-block">
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5PtA1LuQjHI8UsKeOhvZyhgzq8kVcqs7vw&usqp=CAU"
              className="rounded-circle  logo"
              style={{
                height: 40,
                width: 40,
              }}
            />
            <span className="fst-italic text-white ms-1">VacBook</span>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar className="w-50">
            <Nav className="mx-auto" navbar>
              <NavItem onClick={toggle}>
                <NavLink
                  className="text-white px-md-4 px-1 zoom"
                  tag={Link}
                  to="/"
                >
                  Home{" "}
                </NavLink>
              </NavItem >
              <NavItem onClick={toggle}>
                <NavLink
                  className="text-white px-md-4 px-1 zoom"
                  tag={Link}
                  to="/about"
                >
                  About{" "}
                </NavLink>
              </NavItem >
              <NavItem onClick={toggle}>
                <NavLink
                  className="text-white px-md-4  px-1 zoom "
                  tag={Link}
                  to="/book_slot"
                >
                  Book A Slot
                </NavLink>
              </NavItem>
              <NavItem onClick={toggle}>
                <NavLink>
                  <AppointmentModal />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand className="d-xs-block d-md-none mx-auto">
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5PtA1LuQjHI8UsKeOhvZyhgzq8kVcqs7vw&usqp=CAU"
              className="rounded-circle  logo"
              style={{
                height: 20,
                width: 20,
              }}
            />
            <span className="fst-italic text-white ms-1" style={{fontSize: "15px"}}>VacBook</span>
          </NavbarBrand>
          <div className="d-flex ms-md-auto">
            {user ? (
              <UncontrolledDropdown className="me-5">
                <DropdownToggle nav>
                  <CgProfile className="fs-3 mt-1 text-white" />
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={Link} to="/user-profile">
                    My Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={() => {
                      logout();
                      naviagte("/");
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <>
                <RegsiterModal />
                <LoginModal />
              </>
            )}

            {/*  This part will be in the logout section */}
          </div>
        </Navbar>
      )}
    </div>
  );
}

export default Navvbar;
