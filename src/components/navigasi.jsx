import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

const Menu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img alt="logo" style={{ width: '50px', height: '50px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="https://www.instagram.com/gatotbim_/" target='_blank' className='me-3'>
                <BsInstagram 
                className='fs-4'
                />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/whoami53219259" target='_blank'>
                <BsTwitter  
                className='fs-4'
                />
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
