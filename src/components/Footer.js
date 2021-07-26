import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MFooter>
      <div className="footer">
        <p>2021 (&copy;) -Samwyle banditions</p>
        <p>
          <span>`maintain by shipgigventures.com`</span>
        </p>
      </div>
    </MFooter>
  );
};

const MFooter = styled.div`
  background: rgb(209, 209, 209);
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #000;
  p {
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
`;
export default Footer;
