import React, { Component } from "react";
import hero from "../img/hero.jpg";
import styled from "styled-components";

class AboutSection extends Component {
  render() {
    return (
      <About>
        <Description>
          <div className="title">
            <div className="hide">
              <p>
                Drinking <span>coffee</span>, enjoy with Samwyle. take `1`
                <span>1 free,,</span>
              </p>
            </div>
            <div className="hide">
              <h2>Coffee Shop</h2>
            </div>
          </div>

          <div className="order-here">
            <button>Order Here</button>
          </div>
        </Description>

        <Image>
          <img src={hero} alt="hero-pic" />
        </Image>
      </About>
    );
  }
}

const About = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 7rem;
  color: black;

  p {
    font-weight: lighter;
    font-size: 2rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
    padding-bottom: 1rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
`;
const Description = styled.div`
  flex: 1;
  margin-left: 8rem;
  padding-right: 3rem;
`;

const Image = styled.div`
  flex: 1;
  padding-left: 4rem;
  img {
    width: 25vw;
    height: 70vh;
    border-radius: 0.4rem;
    cursor: pointer;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
export default AboutSection;
