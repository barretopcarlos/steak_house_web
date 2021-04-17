//bilbioteca padrão REACT
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Main from './views/Main';
import { Row, Col } from 'react-materialize';

//declarando o componente como uma classe
class App extends React.Component {

  //função render -> tem como objetivo retornar o conteudo
  //html que o componente irá renderizar na página
  render() {
    return (
      <Row>
        <Header />
        <Row>
          <Col s={3}>
            <Profile />
          </Col>
          <Col s={9}>
            <Main />
          </Col>
        </Row>
      </Row>
    )
  }

}

//tornando o componente publico
export default App;