import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

class Nav extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1 id="logo">
            <img src={logo} alt="logo-error" />
          </h1>
          <ul>
            <li>
              <Link className="a" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="a" to="/promotion">
                Promotion
              </Link>
            </li>
            <li>
              <Link className="a" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="a" to="/contact">
                ContactUs
              </Link>
            </li>
          </ul>
        </Header>
      </div>
    );
  }
}

const Header = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem 10rem;
  color: black;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
  li {
    padding-right: 6rem;
    font-size: 1.5rem;
  }
  #logo {
    padding-right: 2rem;
  }

  .a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }

  a:hover {
    font-width: lighter;
  }
`;

export default Nav;
