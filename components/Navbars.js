import React from 'react'
import $ from 'jquery'
import { Table , responsive , Nav , Navbar , NavItem , MenuItem , NavDropdown } from 'react-bootstrap'

var Navbars = React.createClass({
  render: function(){
    return (
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Concert Nation Iceland</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="https://www.youtube.com/watch?v=vzSHcyXfNPw">Iceland Vacation Travel Guide</NavItem>
          <NavItem eventKey={2} href="#">Midi.is</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Git Adrian</NavItem>
          <NavItem eventKey={2} href="#">Git Hafsteinn</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
});

export default Navbars;
