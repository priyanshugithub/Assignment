import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, NavLink, Table } from 'reactstrap';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaCog from 'react-icons/lib/fa/cog';
import IoEdit from 'react-icons/lib/io/edit';
import IoAndroidArrowDropright from 'react-icons/lib/io/android-arrow-dropright';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaQuestionCircleO from 'react-icons/lib/fa/question-circle-o';
import IoIosContactOutline from 'react-icons/lib/io/ios-contact-outline';
import MdAssessment from 'react-icons/lib/md/assessment';
import MdChatBubble from 'react-icons/lib/md/chat-bubble';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';


const Nabar = () => {
	return(
		
	<div class="navstyle">
       <Navbar  light expand="md">
          <NavbarBrand class="navcolor">Oppia <FaAngleRight /> Eating Disorders <FaAngleRight /> Statistics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
            
              <NavItem>
                <NavLink href="/"><IoEdit size={20} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><IoAndroidArrowDropright size={30} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><FaCog size={20} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/table"><MdAssessment size={20} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><FaClockO size={20} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><MdChatBubble size={20} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><FaQuestionCircleO size={20} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><IoIosContactOutline size={20} /></NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
        <hr />
      </div>

	)
}

export default Nabar;
