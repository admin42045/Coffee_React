import React from "react";
import styled from "styled-components";
import Contact from "../Pages/Contact";

const Contacts = () => {
  return (
    <MContacts>
      <div className="container">
        <div className="rows">
          <div className="about-map">
            <h1>Map area..</h1>
          </div>
          <div className="cform">
            <h1>form area...</h1>
          </div>
        </div>
      </div>
    </MContacts>
  );
};

const MContacts = styled.div`
  min-height: 90vh;
  border: 0.1rem solid black;
`;
export default Contacts;
