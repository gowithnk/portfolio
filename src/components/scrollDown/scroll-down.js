import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  color: #66fcf1;
  bottom: 3em;
  height: 100px;
  font-size: 70px;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  text-shadow: 1px 1px #45a29e;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

function ScrollDown() {
  return (
    <div>
      <MyScroll>
        <div className="turn">
          <span> &gt; </span>
        </div>
      </MyScroll>
    </div>
  );
}

export default ScrollDown;
