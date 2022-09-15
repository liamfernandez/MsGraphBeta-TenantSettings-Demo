import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Footer, Header } from './custom/Header'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="bg-[#F2F2F2] h-[100vh]">
        <Header />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
