import styled from "styled-components";
import rightcup from "../img/rightcup.svg";
import React from "react";

const CoffeeOftheDay = () => {
  return (
    <Main>
      <div className="container">
        <Rows>
          <div className="des-cs">
            <img src={rightcup} alt="csimage" />
          </div>
          <div className="des-text">
            <h3>The Coffee Shop Samwyle</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            </p>
          </div>
        </Rows>
      </div>
    </Main>
  );
};

const Main = styled.div`
  min-height: 60vh;
  background: rgb(230, 230, 230);
  img {
    min-height: 20vh;
    width: 40%;
    margin: 5rem;
  }

  .des-cs {
    flex: 1;
  }
  .des-text {
    flex: 1;
    margin: 5rem;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`;
const Rows = styled.div`
  display: flex;
  flex-direction: row-reverse;

  .des-text {
    margin-left: 10rem;
  }
`;

export default CoffeeOftheDay;
