import React from 'react';
import { Row, Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{

  render() {
    return (
      <Row>
          <Navbar className="deep-orange darken-4">
            <li><NavLink to="/">Página inicial</NavLink></li>
            <li><NavLink to="/cadastro-cliente">Crie sua Conta de Cliente</NavLink></li>
          </Navbar>
      </Row>
    )
  }
}

export default Header;

