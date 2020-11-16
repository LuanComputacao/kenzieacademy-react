import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components"
import {Image, Nav, Navbar} from "react-bootstrap";
import logo from "../../images/logo.svg"
import {text} from "../../styled/config";

const StyledNavBar = styled.nav`
  
  background-color: transparent;
  & nav{
    background: none;
    background-color: transparent;
  }
  
  & a {
    color: ${props => props.clear? `${text.clear} !important`: `${text.grey}`}; 
  }
`

const NavBar = ({routes, clear}) => (
    <StyledNavBar clear={document.location.pathname === '/'}>
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <Image rounded src={logo} width={30} height={30}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    {Object.getOwnPropertyNames(routes).map(pName => (
                        <Nav.Link href={routes[pName].route}>{routes[pName].text}</Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </StyledNavBar>
)

export default NavBar