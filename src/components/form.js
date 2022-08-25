import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  
    NavbarText,
  } from 'reactstrap';


export default class FORM extends Component {
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            isOpen:false
        };
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        });
    }



  render() {
    return (
        
        <Navbar color='light' light ezpand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem >
                <NavLink >Components</NavLink>
              </NavItem>
              <NavItem >
                <NavLink  href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      
    )
  }
}
