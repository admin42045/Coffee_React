import React, { Component } from "react";
import styled from "styled-components";

class Promotion extends Component {
  render() {
    return (
      <Header>
        <h1>Promotion comming soon.....</h1>
      </Header>
    );
  }
}

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
export default Promotion;
