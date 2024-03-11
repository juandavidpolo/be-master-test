import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks/scrollposition';

import { setUser } from '../../../utils/complements';

import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import DisnyeyLogo from "../../../assets/svg/disneyLogo";

const NavigationBar = () => {

  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();

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

  function logout(){
    setUser(null);
    navigate("/login")
  }

  return(
    <Navbar fixed="top" expand="sm" className={navHeightChange? " navbar--scrolling":""}>
      <NavbarBrand href="#">
        <DisnyeyLogo width="79" height="48"/>
      </NavbarBrand>
      <NavbarToggler onClick={ev => {toggle()}} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/content/disney">Disney</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/content/marvel">Marvel</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/content/star-wars">Star Wars</NavLink>
          </NavItem>
          <NavItem>
            <a className="nav-link" type="button" onClick={ev=>{logout()}}>Cerrar Sesion</a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavigationBar;