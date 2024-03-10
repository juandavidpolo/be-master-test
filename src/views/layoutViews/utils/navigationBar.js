import React, {useState} from "react";

import { useScrollPosition } from '../../../hooks/scrollposition';

import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import DisnyeyLogo from "../../../assets/svg/disneyLogo";

const NavigationBar = () => {

  const scrollPosition = useScrollPosition();

  const [isOpen, setOpen] = useState(false);

  let navHeightChange = false
  if (scrollPosition > 1) {
    navHeightChange = true
  } else {
    navHeightChange = false
  }

  function toggle(){
    setOpen(!isOpen)
  }

  return(
    <Navbar fixed="top" expand="sm" dark={true} className={navHeightChange? " navbar--scrolling":""}>
      <NavbarBrand href="#">
        <DisnyeyLogo width="79" height="48"/>
      </NavbarBrand>
      <NavbarToggler onClick={ev => {toggle()}} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="#">Components</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavigationBar;