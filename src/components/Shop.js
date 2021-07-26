import React from "react";

import styled from "styled-components";

const Shop = () => {
  return (
    <MianShop>
      <div className="container">
        <Cards>
          <div className="card1">
            <h3>Americano</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </p>
            <button className="btn1">Order now</button>
          </div>

          <div className="card2">
            <h3>Latte</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </p>
            <button className="btn2">Order now</button>
          </div>

          <div className="card3">
            <h3>Espresson</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </p>
            <button className="btn3">Order now</button>
          </div>
        </Cards>
      </div>
    </MianShop>
  );
};

const MianShop = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: rgb(204, 204, 201);
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 1rem;
  .btn1,
  .btn2,
  .btn3 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0.9rem;
    margin-left: 4rem;
    flex-direction: row;
  }

  @media only screen and (max-width: 600px) {
    .card1,
    .card2,
    .card3 {
      min-width: 40vh;
      width: 100%;
    }

    .btn1,
    .btn2,
    .btn3 {
      margin-bottom: 1rem;
      margin-left: 3rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .card1,
    .card2,
    .card3 {
      min-width: 40vh;
      width: 30%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .card1,
    .card2,
    .card3 {
      min-width: 50vh;
      width: 22%;
    }
    .btn1,
    .btn2,
    .btn3 {
      margin-top: 2.5rem;
      margin-left: 4.5rem;
    }
  }

  .card1,
  .card2,
  .card3 {
    min-height: 60vh;
    width: 22%;
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    margin: 1rem;
    h3 {
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
      padding-top: 1rem;
    }

    p {
      text-align: center;
      font-size: 1.1rem;
      padding: 1rem 2rem;
    }
  }
`;
export default Shop;
