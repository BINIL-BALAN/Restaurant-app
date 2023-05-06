import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.pngitem.com/pimgs/m/21-216129_restaurants-clipart-restaurant-symbol-logo-for-restaurant-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Restaurant app
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header